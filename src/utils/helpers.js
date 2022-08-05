export const validateData = data => {
    let error = {};
    Object.keys(data).forEach(key => {
               if(!data[key]){
        //   setButtonDisable(true);
          error[key] = 'Required!'
        } else {
          if(error[key]){
            delete error[key];
          }
        }
    })
    return error;
}

export const validateField = (key,value,error) =>{
    const errors = {...error};
    if(!value){
        errors[key] = 'Required!'
        } else {
          if(errors[key]){
            delete errors[key];
          }
        }
        return errors;
}