const button = document.querySelector(".button")
const newText = document.querySelector(".text_new")
const doneText = document.querySelector(".text_done")
const ol = document.querySelector(".create_list")
const done = document.querySelector(".lists")

button.addEventListener("click", () => {
    let li = document.createElement("li")
    li.className = "margin"

    let flex = document.createElement("div")
    flex.className = "flex"

    let input_f = document.createElement("input")
    input_f.className = "write"
    input_f.type = "text"

    let input_s = document.createElement("input")
    input_s.className = "check"
    input_s.type = "checkbox"

    flex.appendChild(input_f)
    flex.appendChild(input_s)
    li.appendChild(flex)

    ol.appendChild(li)

    newText.textContent = "Need To Do"
})



ol.addEventListener("click", (e) => {
    if (e.target.classList.contains("check")) {
        if (e.target.previousElementSibling.value.trim() != "") {
            let li_2 = document.createElement("li")
            li_2.className = "margin"

            let flex_2 = document.createElement("div")
            flex_2.className = "flex"
            
            let written = document.createElement("input")
            written.className = "written"
            written.type = "text"
            written.value = `${e.target.previousElementSibling.value.trim()}`
            
            e.target.classList.add("p-none")
            let sibling = e.target.previousElementSibling
            sibling.classList.add("p-none")
            sibling.value = sibling.value.trim()
            sibling.classList.add("disabled")
            e.target.classList.add("disabled")


            flex_2.appendChild(written)
            li_2.appendChild(flex_2)
            done.appendChild(li_2)
            doneText.textContent = "Done"
        }
        else if (e.target.previousElementSibling.value.trim() == "") {
            e.target.previousElementSibling.value = ""
            e.target.checked = false
            alert("Please fill empty places.")
        }
    }
})