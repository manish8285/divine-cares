export const PriceDetails=({total})=>{
    return (
        <div className="product-categories mb-4">
            <h4>This Package Includes</h4>
            <ul className="list-unstyled">
              <li>
                <div className="categories-item">
                  <a href="#" className="text-dark"><i className="fas fa-apple-alt text-secondary me-2" /> Consultation Fee</a>
                  <span>Rs 500</span>
                </div>
              </li>
              <li>
                <div className="categories-item">
                  <a href="#" className="text-dark"><i className="fas fa-apple-alt text-secondary me-2" />Medicine</a>
                  <span>Rs 1000</span>
                </div>
              </li>
              <li>
                <div className="categories-item">
                  <a href="#" className="text-dark"><i className="fas fa-apple-alt text-secondary me-2" />Delivery Charge</a>
                  <span>Rs 200</span>
                </div>
              </li>
              <li>
                <div className="categories-item">
                  <a href="#" className="text-dark"><i className="fas fa-apple-alt text-secondary me-2" />Tax and Plateform fee</a>
                  <span>Rs 50</span>
                </div>
              </li>
              <hr />
              <li>
                <div className="categories-item">
                  <a href="#" className="text-dark"><i className="fas fa-apple-alt text-secondary me-2" />Total</a>
                  <span><s>Rs 1750</s> Rs {total}/-</span>
                </div>
              </li>
            </ul>
          </div>
    )
}