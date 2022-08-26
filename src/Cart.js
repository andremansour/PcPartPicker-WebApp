import { Alert } from 'bootstrap';
import React, { useState }  from 'react'
import { useCart } from 'react-use-cart';
import data from "./data.js";
import axios from 'axios';


const Cart = () => {

    const { 
        isEmpty,
        totalUniqueItems,
        totalItems,
        items,
        cartTotal,
        removeItem,
        emptyCart,
    } = useCart();

    if(isEmpty) return <h1 className="text-center p-3">Please build your PC!</h1>;


    const onSubmit = (event, hasCase, hasCpu, hasCpuCooler, hasMotherboard, hasPowerSupply, hasRam, hasStorage, hasVideoCard) => {
        var hasCase = items.some(item => item.type === 'case');
        var hasCpu = items.some(item => item.type === 'cpu');
        var hasCpuCooler = items.some(item => item.type === 'cpuCooler');
        var hasRam = items.some(item => item.type === 'memory');
        var hasMotherboard = items.some(item => item.type === 'motherboard');
        var hasPowerSupply = items.some(item => item.type === 'powersupply');
        var hasStorage = items.some(item => item.type === 'storage');
        var hasVideoCard = items.some(item => item.type === 'videocard');
        
        if(hasCase && hasCpu && hasCpuCooler && hasRam && hasMotherboard && hasPowerSupply && hasStorage && hasVideoCard){
            alert("Your PC is on its way!");
        }
        else if(!hasCase){
            alert("Please choose a case");
        }
        else if(!hasCpu){
            alert("Please choose a CPU");
        }
        else if(!hasCpuCooler){
            alert("Please choose a CPU Cooler");
        }
        else if(!hasRam){
            alert("Please choose a RAM");
        }
        else if(!hasMotherboard){
            alert("Please choose a Motherboard");
        }
        else if(!hasPowerSupply){
            alert("Please choose a Power Supply");
        }
        else if(!hasStorage){
            alert("Please choose a Storage");
        }
        else if(!hasVideoCard){
            alert("Please choose a Video Card");
        }

        event.preventDefault();
        // axios.post('http://localhost:3306/api/cart/save', pcBuild)

        console.log(pcBuild);

    }


    var hasCpuCoolerSpecs = '';
    var hasCaseSpecs = '';
    var hasCpuSpecs = '';
    var hasMotherboardSpecs = '';
    var hasPowerSupplySpecs = '';
    var hasRamSpecs = '';
    var hasStorageSpecs = '';
    var hasVideoCardSpecs = '';


    const hasCase = items.some(item => item.type === 'case');
        if(hasCase){ 
            hasCaseSpecs = [items.filter(item => (item.type === 'case'))].map(item => item[0].desc).toString();

            var caseID = [items.filter(item => (item.type === 'case'))].map(item => item[0].id).toString();
                if(caseID){
                    caseID = Number(caseID)
                }
            var caseTitle = [items.filter(item => (item.type === 'case'))].map(item => item[0].title).toString();
            var casePrice = [items.filter(item => (item.type === 'case'))].map(item => item[0].price);
                if(casePrice){
                    casePrice = Number(casePrice)
                }
            var caseType = [items.filter(item => (item.type === 'case'))].map(item => item[0].type).toString();
        }

    const hasCpuCooler = items.some(item => item.type === 'cpuCooler');
        if(hasCpuCooler){ 
            hasCpuCoolerSpecs = [items.filter(item => (item.type === 'cpuCooler'))].map(item => item[0].desc).toString();

            var cpuCoolerID = [items.filter(item => (item.type === 'cpuCooler'))].map(item => item[0].id);
                if(cpuCoolerID){
                    cpuCoolerID = Number(cpuCoolerID)
                }

            var cpuCoolerTitle = [items.filter(item => (item.type === 'cpuCooler'))].map(item => item[0].title).toString();

            var cpuCoolerPrice = [items.filter(item => (item.type === 'cpuCooler'))].map(item => item[0].price);
                if(cpuCoolerPrice){
                    cpuCoolerPrice = Number(cpuCoolerPrice)
                }
                
            var cpuCoolerType = [items.filter(item => (item.type === 'cpuCooler'))].map(item => item[0].type).toString();

        }

    const hasCpu = items.some(item => item.type === 'cpu');
        if(hasCpu){
            hasCpuSpecs = [items.filter(item => (item.type === 'cpu'))].map(item => item[0].desc).toString();

            var cpuID = [items.filter(item => (item.type === 'cpu'))].map(item => item[0].id);
                if(cpuID){
                    cpuID = Number(cpuID)
                }

            var cpuTitle = [items.filter(item => (item.type === 'cpu'))].map(item => item[0].title).toString();

            var cpuPrice = [items.filter(item => (item.type === 'cpu'))].map(item => item[0].price);
                if(cpuPrice){
                    cpuPrice = Number(cpuPrice)
                }
                
            var cpuType = [items.filter(item => (item.type === 'cpu'))].map(item => item[0].type).toString();

        }

    const hasMotherboard = items.some(item => item.type === 'motherboard');
        if(hasMotherboard){
            hasMotherboardSpecs = [items.filter(item => (item.type === 'motherboard'))].map(item => item[0].desc).toString();

            var motherboardID = [items.filter(item => (item.type === 'motherboard'))].map(item => item[0].id);
                if(motherboardID){
                    motherboardID = Number(motherboardID)
                }

            var motherboardTitle = [items.filter(item => (item.type === 'motherboard'))].map(item => item[0].title).toString();

            var motherboardPrice = [items.filter(item => (item.type === 'motherboard'))].map(item => item[0].price);
                if(motherboardPrice){
                    motherboardPrice = Number(motherboardPrice)
                }
                
            var motherboardType = [items.filter(item => (item.type === 'motherboard'))].map(item => item[0].type).toString();

        }

    const hasPowerSupply = items.some(item => item.type === 'powersupply');
        if(hasPowerSupply){
            hasPowerSupplySpecs = [items.filter(item => (item.type === 'powersupply'))].map(item => item[0].desc).toString();

            var powerSupplyID = [items.filter(item => (item.type === 'powersupply'))].map(item => item[0].id);
                if(powerSupplyID){
                    powerSupplyID = Number(powerSupplyID)
                }

            var powerSupplyTitle = [items.filter(item => (item.type === 'powersupply'))].map(item => item[0].title).toString();

            var powerSupplyPrice = [items.filter(item => (item.type === 'powersupply'))].map(item => item[0].price);
                if(powerSupplyPrice){
                    powerSupplyPrice = Number(powerSupplyPrice)
                }

            var powerSupplyType = [items.filter(item => (item.type === 'powersupply'))].map(item => item[0].type).toString();

        }

    const hasRam = items.some(item => item.type === 'memory');
        if(hasRam){
            hasRamSpecs = [items.filter(item => (item.type === 'memory'))].map(item => item[0].desc).toString();

            var ramID = [items.filter(item => (item.type === 'memory'))].map(item => item[0].id);
                if(ramID){
                    ramID = Number(ramID)
                }

            var ramTitle = [items.filter(item => (item.type === 'memory'))].map(item => item[0].title).toString();

            var ramPrice = [items.filter(item => (item.type === 'memory'))].map(item => item[0].price);
                if(ramPrice){
                    ramPrice = Number(ramPrice)
                }
                
            var ramType = [items.filter(item => (item.type === 'memory'))].map(item => item[0].type).toString();

        }

    const hasStorage = items.some(item => item.type === 'storage');
        if(hasStorage){
            hasStorageSpecs = [items.filter(item => (item.type === 'storage'))].map(item => item[0].desc).toString();

            var storageID = [items.filter(item => (item.type === 'storage'))].map(item => item[0].id);
                if(storageID){
                    storageID = Number(storageID)
                }

            var storageTitle = [items.filter(item => (item.type === 'storage'))].map(item => item[0].title).toString();

            var storagePrice = [items.filter(item => (item.type === 'storage'))].map(item => item[0].price); 
                if(storagePrice){
                    storagePrice = Number(storagePrice)
                }

            var storageType = [items.filter(item => (item.type === 'storage'))].map(item => item[0].type).toString();

        }

    const hasVideoCard = items.some(item => item.type === 'videocard');
        if(hasVideoCard){
            hasVideoCardSpecs = [items.filter(item => (item.type === 'videocard'))].map(item => item[0].desc).toString();

            var videoCardID = [items.filter(item => (item.type === 'videocard'))].map(item => item[0].id);
                if(videoCardID){
                    videoCardID = Number(videoCardID)
                }

            var videoCardTitle = [items.filter(item => (item.type === 'videocard'))].map(item => item[0].title).toString();

            var videoCardPrice = [items.filter(item => (item.type === 'videocard'))].map(item => item[0].price);
                if(videoCardPrice){
                    videoCardPrice = Number(videoCardPrice) 
                }

            var videoCardType = [items.filter(item => (item.type === 'videocard'))].map(item => item[0].type).toString();

        }



    // Case Details
    var Case = {
        id: caseID,
        title: caseTitle,
        price: casePrice,
        Type: caseType
    }

    // CPU Details
    var Cpu = {
            id: cpuID,
            title: cpuTitle,
            price: cpuPrice,
            Type: cpuType
        }

    // CPU-Cooler Details
    var CpuCooler = {
            id: cpuCoolerID,
            title: cpuCoolerTitle,
            price: cpuCoolerPrice,
            Type: cpuCoolerType
        }

    // Motherboard Details
    var Motherboard = {
            id: motherboardID,
            title: motherboardTitle,
            price: motherboardPrice,
            Type: motherboardType
        }

    // Power Supply Details
    var PowerSupply = {
            id: powerSupplyID,
            title: powerSupplyTitle,
            price: powerSupplyPrice,
            Type: powerSupplyType
        }
    
    // RAM Details
    var Ram = {
            id: ramID,
            title: ramTitle,
            price: ramPrice,
            Type: ramType
        }
    
    // Storage Details
    var Storage = {
            id: storageID,
            title: storageTitle,
            price: storagePrice,
            Type: storageType
        }
    
    // Video Card Details
    var VideoCard = {
            id: videoCardID,
            title: videoCardTitle,
            price: videoCardPrice,
            Type: videoCardType
        }
    
    // Full PC Details, this will be used to send to the database
    var pcBuild = {
        PC: {
            Case,
            Cpu,
            CpuCooler,
            Motherboard,
            PowerSupply,
            Ram,
            Storage,
            VideoCard
        }
    }


    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
               <div className="col-12">  
                    <h5>Cart ({totalUniqueItems}) total items: ({totalItems})</h5>
                    <table className="table table-light table-hover m-0">
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={item.img} style={{height: '6rem'}} />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>${item.price}</td>
                                        <td>Quantity ({item.quantity})</td>
                                        <td>
                                            <button className="btn btn-danger ms-2" onClick={() => removeItem(item.id)}>Remove Item</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
               </div>
               <form onSubmit={onSubmit}>
                    <div className="col-md-12 mt-5">
                            <h2>
                                <strong>Total:</strong> ${cartTotal}
                            </h2>
                            <h4>
                                <strong>Your PC Specs</strong>
                            </h4>
                            <p>
                                <strong>Case:</strong> {hasCaseSpecs}
                            </p>
                            <p>
                                <strong>Cooler:</strong> {hasCpuCoolerSpecs}
                            </p>
                            <p>
                                <strong>CPU:</strong> {hasCpuSpecs}
                            </p>
                            <p>
                                <strong>Motherboard:</strong> {hasMotherboardSpecs}
                            </p>
                            <p>
                                <strong>Power Supply:</strong> {hasPowerSupplySpecs}
                            </p>
                            <p>
                                <strong>RAM:</strong> {hasRamSpecs}
                            </p>
                            <p>
                                <strong>Storage:</strong> {hasStorageSpecs}
                            </p>
                            <p>
                                <strong>Video Card:</strong> {hasVideoCardSpecs}
                            </p>
                            <input name="pcBuild" defaultValue={pcBuild} hidden></input>
                    </div>
                    <div className="col-auto ms-auto">
                        <button className="btn btn-danger" onClick={emptyCart}>Empty Cart</button>
                        <button className="btn btn-primary m-2">Buy Now</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Cart;