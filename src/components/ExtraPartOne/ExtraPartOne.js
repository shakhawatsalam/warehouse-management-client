import React from 'react';

const ExtraPartOne = () => {
    return (
        <div class="row mt-5 mb-5">
            <h1 className='text-center mb-3'><span>Our</span> Address</h1>
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Texas</h5>
                        <p class="card-text">Zipcode:79109, Telephone Number: 8006-3051-10620,Street Address:4214 Hilltop Drive </p>

                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Alaska</h5>
                        <p class="card-text">Zipcode:99606, Telephone Number: 907-571-4041,Street Address:4503 Jerry Toth Drive </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraPartOne;