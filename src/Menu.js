import React , { Fragment } from "react";
import './Menu.css';
import mego from "./images/megoo.jpg";

const Menu =()=>{

    return(
        <Fragment>
            <div className="container">
                <div class="menu">
                    <ul>
                        <li className="profile">
                            <div className="img-box">
                                <img src={mego} alt="profile"/>
                            </div>
                            <h2>Mega</h2>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-house"></i>
                                <p>Dashboard</p> 
                            </a>
                        
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-user-group"></i>
                                <p>Clients</p>
                            
                            </a>
                        
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-table"></i>
                                <p>Products</p>
                            
                            </a>
                        
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-chart-pie"></i>
                                <p>Charts</p>
                            </a>
                        
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-pen"></i>
                                <p>Posts</p>
                            </a>
                        

                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-star"></i>
                                <p>favorite</p>
                            </a>
                        
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-gear"></i>
                                <p>settings</p>
                            </a>
                        
                        </li>
                        <li className="log-out">
                            <a href="#">
                                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                <p>Log Out</p>
                            </a>
                        
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <div className="title-info">
                        <h2>Dashboard</h2>
                        <i class="fa-regular fa-chart-bar"></i>
                    </div>
                    <div className="data-info">
                        <div className="box">
                        <i class="fa-solid fa-user"></i>
                            <div className="data">
                                <p>User</p>
                                <span>100</span>
                            </div>
                        </div>
                        <div className="box">
                        <i class="fa-solid fa-pen"></i>
                            <div className="data">
                                <p>Posts</p>
                                <span>873</span>
                            </div>
                        </div>
                        <div className="box">
                            <i class="fa-solid fa-table"></i>
                            <div className="data">
                                <p>Products</p>
                                <span>50</span>
                            </div>
                        </div>
                        <div className="box">
                            <i class="fa-light fa-dollar"></i>
                            <div className="data">
                                <p>revenue</p>
                                <span>$986</span>
                            </div>
                        </div>
                        <div className="box">
                            <i class="fa-solid fa-table"></i>
                            <div className="data">
                                <p>Products</p>
                                <span>50</span>
                            </div>
                        </div>
                        <div className="box">
                        <i class="fa-solid fa-pen"></i>
                            <div className="data">
                                <p>Posts</p>
                                <span>873</span>
                            </div>
                        </div>
                    </div>
                    <div className="title-info">
                        <h2>Products</h2>
                        <i class="fa-solid fa-table"></i>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Products</th>
                                <th>Price</th>
                                <th>Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>tv</td>
                                <td><span className="price">$59</span></td>
                                <td><span className="count">45</span></td>
                            </tr>
                            <tr>
                                <td>tv</td>
                                <td><span className="price">$59</span></td>
                                <td><span className="count">45</span></td>
                            </tr>
                            <tr>
                                <td>tv</td>
                                <td><span className="price">$59</span></td>
                                <td><span className="count">45</span></td>
                            </tr>
                            <tr>
                                <td>tv</td>
                                <td><span className="price">$59</span></td>
                                <td><span className="count">45</span></td>
                            </tr>
                            <tr>
                                <td>tv</td>
                                <td><span className="price">$59</span></td>
                                <td><span className="count">45</span></td>
                            </tr>
                            <tr>
                                <td>tv</td>
                                <td><span className="price">$59</span></td>
                                <td><span className="count">45</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>    
        </Fragment>
            
    )
}
export default Menu; 
