const score = document.querySelector(".score span")
const agreement = document.querySelector(".agreement span")
const subjectivity = document.querySelector(".subjectivity span")
const confidence = document.querySelector(".confidence span")
const irony = document.querySelector(".irony span")

function handleSubmit(event) {
  event.preventDefault()

  let formText = document.getElementById("name").value

  return Client.urlValid(formText)
    ? postData("http://localhost:8081/api", { url: formText }).then(res => {
        console.log("Form text submitted")

        score.innerText = res.score_tag
        agreement.innerText = res.agreement
        subjectivity.innerText = res.subjectivity
        confidence.innerText = res.subjectivity
        irony.innerText = res.irony
      })
    : alert("URL invalid, please submit a valid link")
}

const postData = async (url = "", article = {}) => {
  console.log("Analysing:", article)
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(article)
  })
  try {
    const newArticle = await response.json()
    return newArticle
  } catch (error) {
    console.log("error", error)
  }
}

export { handleSubmit }
