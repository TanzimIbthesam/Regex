const inputall=document.querySelectorAll('input');

const patterns = {
    telephone: /^\d{11}$/
};


const validate=(field,regex)=>{
    console.log(regex.test(field.value));
    if(regex.test(field.value)){
        field.className='Valid';
    }else{
        field.className='Invalid'; 
    }
}

inputall.forEach((input) => {
    input.addEventListener('keyup',(e)=>{
        //    e.preventDefault();
        //   console.log(e.target.attributes.name.value);
       
        validate(e.target,patterns[e.target.attributes.name.value]);
    });
    
});