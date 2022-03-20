import { DivDuration, DivTitle, FigureCaption, YoutubeDiv } from "./style";
import React from "react";
import { ButtonDownload } from "../../styles/button";

export function DownloadSection() {
    return (
        
        <>
        <FigureCaption>
            <img src="" alt="" />
        </FigureCaption>
        <YoutubeDiv>
            <DivTitle>
                <h3> Learn Reactjs </h3>
            </DivTitle>
            <DivDuration>
                <p> Duration: <span>00:14:07</span> </p>
            </DivDuration>
                <ButtonDownload>
                Download
                </ButtonDownload>
           
        </YoutubeDiv>
        
            
            </>
            
            
    )
}