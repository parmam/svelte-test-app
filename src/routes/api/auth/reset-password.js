export function path(event) {
    console.log(event)
    return {
      status:200,
      body:{
        message:"Hello World"
      }
    }
  }