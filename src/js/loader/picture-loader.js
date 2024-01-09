export class PictureLoader {
    #document = document.querySelector('body')

    constructor() {
        this.#buildLayout()
    }
    
    #buildLayout() {
        // 1st : Create a new DIV with className : outer-div
        const outerBox = document.createElement('div')
        // 2nd : Add the class to the freshly createdElement
        outerBox.classList.add('outer-box')

        // 3rd : Create the inner div
        const innerBox = document.createElement('div')
        innerBox.classList.add('inner-box')

        // 4th : Add the second box as child of first box
        outerBox.appendChild(innerBox)

        // Think to hook new element to existing DOM element
        this.#document.appendChild(outerBox)
    }
}