import React from 'react';
import "./style.css";

 function albumContainer (props){ 
   
    //We declare an array with all the album and their id's and onClick function
    const array = [
    <img key="1" id="1" src={require(`../../assets/jesusisking.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="jik"/>,
    <img key="2" id="2" src={require(`../../assets/collegedropout.jpeg`)} onClick={props.handleImageClick} className="img-thumbnail" alt="cd"/>,
    <img key="3" id="3" src={require(`../../assets/lateregistration.jpeg`)} onClick={props.handleImageClick} className="img-thumbnail" alt="lr"/>,
    <img key="4" id="4" src={require(`../../assets/graduation.jpeg`)} onClick={props.handleImageClick} className="img-thumbnail" alt="grad"/>,
    <img key="5" id="5" src={require(`../../assets/808s.jpeg`)} onClick={props.handleImageClick} className="img-thumbnail" alt="808s"/>,
    <img key="6" id="6" src={require(`../../assets/mbdtf.jpeg`)} onClick={props.handleImageClick} className="img-thumbnail" alt="mbdtf"/>,
    <img key="7" id="7" src={require(`../../assets/wtt.jpeg`)} onClick={props.handleImageClick} className="img-thumbnail" alt="wtt"/>,
    <img key="8" id="8" src={require(`../../assets/cruelsummer.jpeg`)} onClick={props.handleImageClick} className="img-thumbnail" alt="cs"/>,
    <img key="9" id="9" src={require(`../../assets/yeezus.jpeg`)} onClick={props.handleImageClick} className="img-thumbnail" alt="yeezus"/>,
    <img key="10" id="10" src={require(`../../assets/tlop.jpeg`)} onClick={props.handleImageClick} className="img-thumbnail" alt="tlop"/>,
    <img key="11" id="11" src={require(`../../assets/ye.jpeg`)} onClick={props.handleImageClick} className="img-thumbnail" alt="ye"/>,
    <img key="12" id="12" src={require(`../../assets/ksg.jpeg`)} onClick={props.handleImageClick} className="img-thumbnail" alt="ksg"/>];
    
    //shuffler function shuffles 
    function shuffler(arr1) {
        let counter = arr1.length;
        let temp;
        let index;

        while(counter>0) {
            index = Math.floor(Math.random() * counter);
            counter--;
            temp = arr1[counter];
            arr1[counter] = arr1[index];
            arr1[index] = temp;
        }
        return arr1;
    }

    let album = shuffler(array);
    return(
        <main className="album">
            <div className="container">
                {album}
            </div>
        </main>
    );
}

export default albumContainer;