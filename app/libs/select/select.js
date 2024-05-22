let detetBoot = 0;

class SelectWrapper {
		constructor(selectElement, options = {}) {
				if (typeof selectElement === 'string') {
						const selectorType = selectElement.substring(0, 1);
						this.selectElement = selectorType === '#' ? document.getElementById(selectElement.substring(1)) :
								selectorType === '.' ? document.querySelectorAll(selectElement).length > 1 ? SelectWrapper.createAndWraps(selectElement, options) : document.querySelectorAll(selectElement)[0] :
										document.getElementsByTagName(selectElement).length > 1 ? SelectWrapper.createAndWraps(selectElement, options) : document.getElementsByTagName(selectElement)[0];
				} else {
						this.selectElement = selectElement;
				}

				if (!this.selectElement) return;

				this.wrapper = document.createElement('div');
				this.wrapper.className = 'select-wrapper';
				this.selectElement.parentNode.insertBefore(this.wrapper, this.selectElement);
				this.wrapper.appendChild(this.selectElement);

				this.displayElement = document.createElement('div');
				this.displayElement.className = 'select-display';
				this.wrapper.appendChild(this.displayElement);

				this.options = {
						onChange: null,
						listTag: 'ul',
						listItemTag: 'li',
						wrapperClass: '',
						placeholder: "",
						listItemClass: '',
						activeClass: 'active',
						...options,
				};

				this.listElement = document.createElement(this.options.listTag);
				this.listElement.className = 'select-list';
				if (this.options.wrapperClass !== '') {
						this.wrapper.classList.add(this.options.wrapperClass);
				}
				this.wrapper.appendChild(this.listElement);

				this.selectElement.style.display = 'none';
				if (Object.entries(options).length == 0) options = { placeholder: "" };
				this.placeholder(this.selectElement, options);
				this.render();
				this.eventSub();
				this.eventC();
		}

		placeholder(selectElement, optionsObj) {
				const optionsEl = selectElement.options;
				let hasSelected = false;

				for (let i = 0; i < optionsEl.length; i++) {
						const option = optionsEl[i];
						if (option.hasAttribute("selected") || option.hasAttribute("disabled") || option.value == "") {
								this.displayElement.innerText = option.text;
								hasSelected = true;
								break;
						}
				}

				if (!hasSelected) {
						if (typeof optionsObj.placeholder === "string") {
								this.displayElement.innerText = optionsObj.placeholder;
						} else if (Array.isArray(optionsObj.placeholder) && optionsObj.placeholder.length > 0) {
								this.displayElement.innerText = optionsObj.placeholder[0];
						} else {
								this.displayElement.innerText = optionsEl[0].text;
						}
				}
		}

		get isOpen() {
				return this.wrapper.classList.contains('open');
		}

		open() {
				this.wrapper.classList.add('open');
		}

		close() {
				this.wrapper.classList.remove('open');
		}

		selectValue(value) {
				const listItems = this.listElement.querySelectorAll(this.options.listItemTag);
				listItems.forEach(listItem => {
						if (listItem.getAttribute('data-value') === value) {
								listItem.click();
						}
				});
		}

		render() {
				const options = this.selectElement.options;
				const fragment = document.createDocumentFragment();

				for (let i = 0; i < options.length; i++) {
						const option = options[i];
						const listItem = document.createElement(this.options.listItemTag);
						listItem.innerHTML = option.text;
						if (option.value == "") {
								option.value = i;
								listItem.setAttribute('data-value', i);
						} else {
								listItem.setAttribute('data-value', option.value);
						}

						if (this.options.listItemClass !== '') {
								listItem.classList.add(this.options.listItemClass);
						}
						fragment.appendChild(listItem);
				}
				this.listElement.appendChild(fragment);

				this.selectedOption = options[this.selectElement.selectedIndex];
		}

		eventC() {
				document.addEventListener('click', (event) => {
						if (!this.wrapper.contains(event.target)) {
								this.close();
						}
				});
		}

		eventSub() {
				this.wrapper.addEventListener('click', () => {
						this.isOpen ? this.close() : this.open();
				});

				const listItems = this.listElement.querySelectorAll(this.options.listItemTag);
				listItems.forEach(listItem => {
						listItem.addEventListener('click', () => {
								const value = listItem.getAttribute('data-value');
								const text = listItem.innerText;

								this.selectElement.value = value;
								this.selectedOption = this.selectElement.options[this.selectElement.selectedIndex];
								this.displayElement.innerText = this.selectedOption.text;

								listItems.forEach(item => {
										item.classList.remove(this.options.activeClass);
								});

								listItem.classList.add(this.options.activeClass);

								if (this.options.onChange !== null) {
										this.options.onChange(text, value);
								}

								const event = new Event('change');
								this.selectElement.dispatchEvent(event);
						});
				});
		}

		static createAndWraps(classList, options) {
				const selectElements = document.querySelectorAll(classList);
				const placeholder = options.placeholder !== "" || Array.isArray(options.placeholder) ? options.placeholder : "";
				selectElements.forEach(selectElement => {
						new SelectWrapper(selectElement, { placeholder: placeholder });
				});
		}
}
