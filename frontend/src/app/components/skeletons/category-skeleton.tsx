"use client"
import styled from '@emotion/styled';
import NavScrollExample from '../Navbar';
import '../../../../static/css/skeleton.css'

const SkeletonItem = styled.div`
    background-color: #e0e0e0;
    border-radius: 4px;
    animation: pulse 1.5s infinite ease-in-out;

    @keyframes pulse {
        0% {
            background-color: #e0e0e0;
        }
        50% {
            background-color: #f0f0f0;
        }
        100% {
            background-color: #e0e0e0;
        }
    }

    @keyframes gradient {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }
`;

const renderSkeletons = () => {
    const skeletons = [];
    for (let i = 0; i < 11; i++) {
        skeletons.push(
            <div key={i} style={{display:"inline-block"}}>
                <SkeletonItem style={{display:"inline-block",margin:"0 0 0 20px ",width:"83px",height:"80px"}}/>
                <SkeletonItem style={{margin:"0 0 0 15px", width:"98px",height:"25px"}}/>

            </div>
        );
    }
    return skeletons;
};

const renderProd = () => {
    const skeletons = [];
    for (let i = 0; i < 20; i++) {
        skeletons.push(
            <div key={i} style={{display:"inline-block"}}>
                <div style={{display:"inline-block",boxShadow:"0px 8px 16px 0px rgba(0,0,0,0.2)",margin:"0 0 0 0 ",width:"245px",height:"315px",padding:"10px"}}>

                <SkeletonItem style={{display:"inline-block",margin:"10px 0 0 1px",width:"220px",height:"165px"}}/>
                <SkeletonItem style={{margin:"5px 0 0 1px",width:"200px",height:"28px"}}/>
                <SkeletonItem style={{margin:"3px 0 0 1px",width:"80px",height:"15px"}}/>
                <SkeletonItem style={{display:"inline-block",margin : "3px 0 0 0",width:"50px",height:"24px"}}/>
                <SkeletonItem style={{display:"inline-block",margin:"3px 0 0 15px",width:"40px",height:"24px"}}/>
                <SkeletonItem style={{margin:"3px 0 0 0px",width:"130px",height:"25px"}}/>
                     
            </div>
            </div>
        );
    }
    return skeletons;
};


const renderProdmob = () => {
    const skeletons = [];
    for (let i = 0; i < 20; i++) {
        skeletons.push(
            <div key={i} style={{display:"inline-block"}}>
                <div style={{display:"inline-block",boxShadow:"0px 8px 16px 0px rgba(0,0,0,0.2)",margin:"0 0 0 0 ",width:"49vw",height:"40vh",padding:"5px",border:"0.4px solid #8e8d8d7c"}}>

                <SkeletonItem style={{margin:"5px 0 0 1px",width:"45vw",height:"19vh"}}/>
                <SkeletonItem style={{margin:"5px 0 0 1px",width:"40vw",height:"4vh"}}/>
                <SkeletonItem style={{margin:"3px 0 0 1px",width:"80px",height:"2vh"}}/>
                <SkeletonItem style={{display:"inline-block",margin : "3px 0 0 0",width:"15vw",height:"3.5vh"}}/>
                <SkeletonItem style={{display:"inline-block",margin:"3px 0 0 3vw",width:"10vw",height:"3.5vh"}}/>
                <SkeletonItem style={{margin:"0 0 0 0px",width:"20vw",height:"3vh"}}/>
                <SkeletonItem style={{margin:"3px 0 0 0px",width:"30vw",height:"3vh"}}/>
                     
            </div>
            </div>
        );
    }
    return skeletons;
};

const Skeleton = () => (
    <div>
    <div className='homeSkeleton_optiona'>
    <NavScrollExample />

        <div className="optiona" style={{width:"1250px",height:"23vh",overflow:"hidden",padding:"10px 0 0 0"}}>
        {
            renderSkeletons()
        }
        
        </div>
        <div style={{marginTop:"20px"}}>
        {
            renderProd()
        }
        </div>    
                    </div>

        <div className='homeSkeleton_optionb'>

            
            <SkeletonItem style={{margin:"5px 0 0 1px",width:"100vw",height:"17vh"}}/>
            
            <div style={{marginTop:"13px"}}>
            {
                renderProdmob()
            }
            </div>    
            </div>
        </div>
);

export default Skeleton;
