// .container{
//     height: 100%;
//     width: 100%;
//     box-sizing: border-box;
//     position: relative;
// }
// .buttonGroup{
//     height: 44px;
//     width: 100%;
//     display: flex;
//     justify-content: space-evenly;
//     align-items: center; 
// }
// .button {
//     height: 34px;
//     min-width: 50px;
//     background-color: deepskyblue;
//     border: 0px;
//     box-shadow: 0px 0px 2px #222222AA;
//     border-radius: 5px;
//     color: aliceblue;
//     text-align: center;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }
// .text {
//     border-radius: 5px;
//     border: 1px solid #222222AA;
//     height: 34px;
//     text-indent: 1.5em;
// }
// .defaultModules{
//     height: 44px;
//     width: 80px;
//     word-wrap: break-word;
//     border: 1px solid #222;
//     font-size: 14px;
//     padding: 5px;
// }
import styled from 'styled-components';

export const Container = styled.div `
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    .buttonGroup{
        height: 44px;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center; 
       .button {
            height: 34px;
            min-width: 50px;
            background-color: deepskyblue;
            border: 0px;
            box-shadow: 0px 0px 2px #222222AA;
            border-radius: 5px;
            color: aliceblue;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`