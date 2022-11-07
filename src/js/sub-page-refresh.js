if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    console.log('this is a mobile device')
  }
  else{
    console.log('this is not a mobile device')
    onresize = ()=>{
        location.reload()
    }
  }


