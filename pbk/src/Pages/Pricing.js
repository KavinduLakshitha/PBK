import React from "react";
import "../styles/table.css"

export default function Pricing() {
  return (
    <div className="table-container">
      
      <table className="table table-bordered">
          <thead>
            <tr className="table-header" >
              <th rowSpan="2" >Size (inches)</th>
              <th rowSpan="2" >Type</th>
              <th colSpan="2">Price (Rs)</th>
            </tr>
          
            <tr className="table-header">              
              <td>Without Frame</td>
              <td>With Frame</td>
            </tr>
            </thead>
            <tbody>

              {/* 8x12 Details */}
              
              <tr>
                <td rowSpan="2">8x12</td>
                <td>Normal</td>
                <td>2500</td>
                <td>4000</td>
              </tr>

              <tr>
                <td >Couple</td>
                <td>4000</td>
                <td>5500</td>                
              </tr>

              {/* 10x15 Details */}
              
              <tr>
                <td rowSpan="2">10x15</td>
                <td>Normal</td>
                <td>3000</td>
                <td>4700</td>
              </tr>

              <tr>
                <td>Couple</td>
                <td>5000</td>
                <td>6700</td>                
              </tr>

              {/* 10x15 Details */}
              
              <tr>
                <td rowSpan="3">12x18</td>
                <td>Normal</td>
                <td>4500</td>
                <td>6500</td>
              </tr>

              <tr>
                <td>Couple</td>
                <td>6500</td>
                <td>8500</td>                
              </tr>

              <tr>
                <td>Family
                  <br/>(5 people max.)</td>
                <td>3000 per each
                  <br/>( eg:3 people = 3x3000 = Rs.9000 )
                </td>
                <td>Art Price + Rs.2000</td>                
              </tr>
          </tbody>
        </table>   
      
      <p class="courier">
      *Islandwide delivery available. &nbsp;Courier charges may vary depending on
      the size and the location.</p>
    </div>
  );
}
