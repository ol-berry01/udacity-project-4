const scoreChecker = score => {
  if (score == "P+") {
    return "Strong Positive"
  } else if (score == "P") {
    return "Positive"
  } else if (score == "NEU") {
    return "Neutral"
  } else if (score == "N") {
    return "Negative"
  } else if (score == "N+") {
    return "Strong Negative"
  } else {
    return "No Sentiment"
  }
}

export { scoreChecker }
