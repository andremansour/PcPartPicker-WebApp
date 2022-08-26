import React from "react";
import Itemcard from "./Itemcard.js";
import data from "./data.js";
import { useCart } from 'react-use-cart';
import {useEffect, useState} from 'react';


function Home() {


    const { 
        items
    } = useCart();


    var hasCase = items.some(item => item.type === 'case');
    var hasCpu = items.some(item => item.type === 'cpu');
    var hasCpuCooler = items.some(item => item.type === 'cpuCooler');
    var hasRam = items.some(item => item.type === 'memory');
    var hasMotherboard = items.some(item => item.type === 'motherboard');
    var hasPowerSupply = items.some(item => item.type === 'powersupply');
    var hasStorage = items.some(item => item.type === 'storage');
    var hasVideoCard = items.some(item => item.type === 'videocard');



    useEffect(() => {
        if(hasCase){
            document.getElementById("case-section").disabled = true;
        }else{
            document.getElementById("case-section").disabled = false;
        }
        if(hasCpu){
            document.getElementById("cpu-section").disabled = true;
        }else{
            document.getElementById("cpu-section").disabled = false;
        }
        if(hasCpuCooler){
            document.getElementById("cpuCooler-section").disabled = true;
        }else{
            document.getElementById("cpuCooler-section").disabled = false;
        }
        if(hasRam){
            document.getElementById("memory-section").disabled = true;
        }else{
            document.getElementById("memory-section").disabled = false;
        }
        if(hasMotherboard){
            document.getElementById("motherboard-section").disabled = true;
        }else{
            document.getElementById("motherboard-section").disabled = false;
        }
        if(hasPowerSupply){
            document.getElementById("powersupply-section").disabled = true;
        }else{
            document.getElementById("powersupply-section").disabled = false;
        }
        if(hasStorage){
            document.getElementById("storage-section").disabled = true;
        }else{
            document.getElementById("storage-section").disabled = false;
        }   
        if(hasVideoCard){
            document.getElementById("videocard-section").disabled = true;
        }else{
            document.getElementById("videocard-section").disabled = false;
        }
    },[hasCase,hasCpu,hasCpuCooler,hasRam,hasMotherboard,hasPowerSupply,hasStorage,hasVideoCard]);



    return (
        <>
        <h1 className="text-center mt-3">Pc Builder</h1>
            <section className="py-4 container">
                <fieldset id="case-section" className="mt-5">
                    <h3>Choose a Case</h3>
                    <div className="col-md-12">
                        <div className="row justify-content-center">
                                {data.caseData.map((item, index) => {
                                    return (
                                        <Itemcard 
                                        key={item.id} 
                                        img={item.img} 
                                        title={item.title} 
                                        desc={item.desc} 
                                        item={item} 
                                        price={item.price}/>
                                    );
                                })}
                        </div>
                    </div>
                </fieldset>
                <fieldset id="cpu-section" className="mt-5">
                    <h3>Choose a CPU</h3>
                    <div className="col-md-12">
                        <div className="row justify-content-center">
                                {data.cpuData.map((item, index) => {
                                    return (
                                        <Itemcard 
                                        key={item.id} 
                                        img={item.img} 
                                        title={item.title} 
                                        desc={item.desc} 
                                        item={item} 
                                        price={item.price}/>
                                    );
                                })}
                        </div>
                    </div>
                </fieldset>
                <fieldset id="cpuCooler-section" className="mt-5">
                    <h3>Choose a CPU-Cooler</h3>
                    <div className="col-md-12">
                        <div className="row justify-content-center">
                            {data.cpuCoolerData.map((item, index) => {
                                return (
                                    <Itemcard 
                                    key={item.id} 
                                    img={item.img} 
                                    title={item.title} 
                                    desc={item.desc} 
                                    item={item} 
                                    price={item.price}/>
                                );
                            })}
                        </div>
                    </div>
                </fieldset>
                <fieldset id="memory-section" className="mt-5">
                    <h3>Choose your Memory</h3>
                    <div className="col-md-12">
                        <div className="row justify-content-center">
                            {data.memoryData.map((item, index) => {
                                return (
                                    <Itemcard 
                                    key={item.id} 
                                    img={item.img} 
                                    title={item.title} 
                                    desc={item.desc} 
                                    item={item} 
                                    price={item.price}/>
                                );
                            })}
                        </div>
                    </div>
                </fieldset>
                <fieldset id="motherboard-section" className="mt-5">
                    <h3>Choose your Motherboard</h3>
                    <div className="col-md-12">
                        <div className="row justify-content-center">
                            {data.motherboardData.map((item, index) => {
                                return (
                                    <Itemcard 
                                    key={item.id} 
                                    img={item.img} 
                                    title={item.title} 
                                    desc={item.desc} 
                                    item={item} 
                                    price={item.price}/>
                                );
                            })}
                        </div>
                    </div>
                </fieldset>
                <fieldset id="powersupply-section"className="mt-5">
                    <h3>Choose your Power Supply</h3>
                    <div className="col-md-12">
                        <div className="row justify-content-center">
                            {data.powersupplyData.map((item, index) => {
                                return (
                                    <Itemcard 
                                    key={item.id} 
                                    img={item.img} 
                                    title={item.title} 
                                    desc={item.desc} 
                                    item={item} 
                                    price={item.price}/>
                                );
                            })}
                        </div>
                    </div>
                </fieldset>
                <fieldset id="videocard-section"className="mt-5">
                    <h3>Choose your Video Card</h3>
                    <div className="col-md-12">
                        <div className="row justify-content-center">
                            {data.videocardData.map((item, index) => {
                                return (
                                    <Itemcard 
                                    key={item.id} 
                                    img={item.img} 
                                    title={item.title} 
                                    desc={item.desc} 
                                    item={item} 
                                    price={item.price}/>
                                );
                            })}
                        </div>
                    </div>
                </fieldset>
                <fieldset id="storage-section"className="mt-5">
                    <h3>Choose your Storage</h3>
                    <div className="col-md-12">
                        <div className="row justify-content-center">
                            {data.storageData.map((item, index) => {
                                return (
                                    <Itemcard 
                                    key={item.id} 
                                    img={item.img} 
                                    title={item.title} 
                                    desc={item.desc} 
                                    item={item} 
                                    price={item.price}/>
                                );
                            })}
                        </div>
                    </div>
                </fieldset>
            </section>
        </>
  );
}


export default Home;