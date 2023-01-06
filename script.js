document.addEventListener('DOMContentLoaded', () => {
    const arr = new Array(10).fill(1)

    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    document.body.append(wrapper)


    arr.forEach((_, i) => {
        const item = document.createElement('div')
        item.classList.add('item', 'red')

        if (i % 3) {
            item.classList.add('circle')
        }

        wrapper.append(item)
        onClick(item)
    })

    function onClick(item) {
        item.addEventListener('click', () => {
            const isRed = item.className.includes('red')

            if (isRed) {
                const elements = document.getElementsByClassName('green')
                Array.from(elements).forEach(el => {
                    setRed(el)
                })
                setGreen(item)
            } else {
                setRed(item)
            }
        })
    }

    function setRed(item) {
        item.classList.add('red')
        item.classList.remove('green')
    }

    function setGreen(item) {
        item.classList.add('green')
        item.classList.remove('red')
    }
})
