"use client"
import styled from '@emotion/styled';
import '../../../static/css/skeleton.css'

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
    for (let i = 0; i < 6; i++) {
        skeletons.push(
            <div key={i} style={{border : "0.5px solid rgba(0, 0, 0, 0.176)",borderRadius:"6px",padding:"5px 0 5px"}}>
                <SkeletonItem style={{display:"inline-block",margin:"0 0 0 15px ",width:"50px",height:"40px"}}/>
                <SkeletonItem style={{display:"inline-block",margin:"0 0 0 60px", width:"230px",height:"40px"}}/>
            </div>
        );
    }
    return skeletons;
};

const renderSkeletonsmob = () => {
    const skeletons = [];
    for (let i = 0; i < 4; i++) {
        skeletons.push(
            <div key={i} style={{border : "0.5px solid rgba(0, 0, 0, 0.176)",borderRadius:"6px",padding:"5px 0 5px 0"}}>
                <SkeletonItem style={{display:"inline-block",margin:"0 0 0 2vw ",width:"10vw",height:"7.7vh"}}/>
                <SkeletonItem style={{display:"inline-block",margin:"0 0 0 7vw", width:"70vw",height:"7.7vh"}}/>
            </div>
        );
    }
    return skeletons;
};

const Skeleton = () => (
    <div>
        <div className='skeleton-searchResult .homeSkeleton_optiona'>
            {
                renderSkeletons()
            }
        </div>
    <div className='skeleton-searchResult .homeSkeleton_optionb'>
            {
                renderSkeletonsmob()
            }
        </div>
    </div>
);

export default Skeleton;
