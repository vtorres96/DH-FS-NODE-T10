const axios = require("axios")

const buscarUsuariosGitHub = async () => {
  let githubUsers = await axios.get('https://api.github.com/users/vtorres96')

  console.log(githubUsers)
}

buscarUsuariosGitHub()