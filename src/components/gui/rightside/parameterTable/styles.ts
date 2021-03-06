// .container{
//     width: 23vw;
//     height: 100vh;
//     box-sizing: border-box;
//     padding: 5px;
// }
// .container > h1{
//     text-align: center;
// }
// .layoutChose{
//     display: flex;
//     flex-shrink: 0;
//     height: 20vh;
//     width: 100%;
//     box-sizing: border-box;
// }
// .layoutChose > label {
//     font-size: 18px;
// }
// .parameterSet{
//     position: relative;
//     height: 78vh;
//     width: 98%;
//     box-sizing: border-box;
// }
// .parameterSet > h1{
//     position: absolute;
//     top: 0px;
//     left: 0px;
//     height: 100%;
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 0px;
//     text-align: center;
//     background-color: rgba(255,255,255,.8);
// }
// .parameterItem{
//     min-height: 44px;
//     padding: 5px;
//     display: flex;
// }
// .parameterItem > label{
//     font:18px;
//     margin-right:10px; 
//     flex: 1;
// }
// .parameterItem > input{
//     height: 34px;
//     border: 1px solid rgba(34,34,34,.25);
//     text-indent: 1.5em;
//     border-radius: 5px;
//     background-color: #fff;
//     flex: 2;
// }
// .buttonGroup{
//     display: flex;
//     height: 34px;
//     border-left: 1px solid rgba(34,34,34,.25);
// }
// .buttonGroup > button{
//     display: flex;
//     flex: 1;
//     height: 100%;
//     border: 1px solid rgba(34,34,34,.25);
//     border-left: 0px;
//     background-color: #fff;
//     justify-content: center;
//     align-items: center;
// }

import styled from 'styled-components';

export const Container = styled.div`
    width: 23vw;
    height: 100vh;
    box-sizing: border-box;
    padding: 5px;
    .buttonGroup{
        width:100%;
        height: 34px;
        border-left: 1px solid rgba(34,34,34,.25);
    }
    h1 {
       text-align: center;
    }
    .parameterSet{
        position: relative;
        height: 78vh;
        width: 98%;
        box-sizing: border-box;
        h1{
            position: absolute;
            top: 0px;
            left: 0px;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0px;
            text-align: center;
            background-color: rgba(255,255,255,.8);
        }
        .parameterItem{
            min-height: 44px;
            padding: 5px;
            display: flex;
            label{
                font:18px;
                margin-right:10px; 
                flex: 1;
            }
            input{
                height: 34px;
                border: 1px solid rgba(34,34,34,.25);
                text-indent: 1.5em;
                border-radius: 5px;
                background-color: #fff;
                flex: 2;
            }
        
        }

    }

`
