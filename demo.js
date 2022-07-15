function response(answer){
    const opponent = ["rock", "paper", "scissors"];
    let response = rand.opponent();
    if(response==answer){
        result = "tie";
        document.getElementById('result').innerHTML = result;
        return result;
    }
    return response;
  }