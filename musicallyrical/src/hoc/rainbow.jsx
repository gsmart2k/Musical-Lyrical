import React, { Component } from 'react';


const Rainbow = (WrapperComponent)=>{

    const color = ['pink','blue','orange','black','wheat'];
    const randomColor = color[Math.floor(Math.random()*5)];
    console.log(randomColor);
    const className = randomColor + '-text';
    console.log(className);

    return(props)=>{
        return(
            <div className={className}>
            <WrapperComponent {...props} />
            </div>
        )
    }

}
export default Rainbow