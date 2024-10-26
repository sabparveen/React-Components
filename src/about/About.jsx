import { Icon } from '@iconify/react';
import img01 from '../about/img01.png';
import img02 from '../about/img02.png';
import img03 from '../about/img03.png';



import React from 'react'

const About = () => {
    return (

        <>
            <div className="bg-black">

                <div className="container py-5">
                    <div className="row mt-5 align-items-center">
                        <div className="col-12 col-md-6 col-sm-12 mt-3">
                            <h6 className="text-warning"> <Icon className='fs-3 me-3' icon="vaadin:line-h" />GEt Started</h6>
                            <h1 className="text-white display-4">What level of  hiker <br /> are you?</h1>
                            <p className='text-white mt-4 fs-5'>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </p>
                            <h6 className="text-warning">ReadMore <Icon className='fs-3 me-3' icon="si:arrow-right-duotone" /></h6>
                        </div>
                        <div className="col-12 col-md-6 col-sm-12">
                            <img className="img-fluid" src={img01} alt="" />
                        </div>
                    </div>
                </div>








                <div className="container py-5 mt-5">
                    <div className="row mt-5 align-items-center">

                        <div className="col-12 col-md-6 col-sm-12">
                        <img className="img-fluid" src={img02} alt="" />

                        </div>
                        <div className="col-12 col-md-6 col-sm-12 mt-3">
                            <h6 className="text-warning"> <Icon className='fs-3 me-3' icon="vaadin:line-h" />GEt Started</h6>
                            <h1 className="text-white display-4">What level of  hiker <br /> are you?</h1>
                            <p className='text-white mt-4 fs-5'>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </p>
                            <h6 className="text-warning">ReadMore <Icon className='fs-3 me-3' icon="si:arrow-right-duotone" /></h6>
                        </div>

                    </div>
                </div>





                <div className="container py-5 mt-5">
                    <div className="row mt-5 align-items-center">
                        <div className="col-12 col-md-6 col-sm-12 mt-3">
                            <h6 className="text-warning"> <Icon className='fs-3 me-3' icon="vaadin:line-h" />GEt Started</h6>
                            <h1 className="text-white display-4">What level of  hiker <br /> are you?</h1>
                            <p className='text-white mt-4 fs-5'>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </p>
                            <h6 className="text-warning">ReadMore <Icon className='fs-3 me-3' icon="si:arrow-right-duotone" /></h6>
                        </div>
                        <div className="col-12 col-md-6 col-sm-12">
                            <img className="img-fluid" src={img03} alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}
export default About