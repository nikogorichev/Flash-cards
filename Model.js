const fs = require('fs').promises;

class Model {
  constructor(printTopicsController) {
    super(printTopicsController)
  }

  async readQuest(){
    
    let read = await fs.readdir('./topics')
    console.log(read);
   
  }
  
  get ss(){
    console.log(readQuest());
}
}

module.exports = Model
