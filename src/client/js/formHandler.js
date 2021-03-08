function handleSubmit(event) {
  event.preventDefault()

  let formText = document.getElementById("name").value

  return Client.urlValid(formText)
    ? postData("http://localhost:8081/api", { url: formText }).then(res => {
        console.log("Form text submitted")
      })
    : alert("URL invalid, please submit a valid link")
}

const postData = async (url = "", article = {}) => {}

export { handleSubmit }
