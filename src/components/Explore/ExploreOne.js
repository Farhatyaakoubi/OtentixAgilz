import React, { Component } from 'react';
const initData = {
    pre_heading: "explore 1",
    heading: "NFT",
    btn_1: "View All",
    btn_2: "Load More"
}

const data = [
    {
        id: "1",
        img: "/img/auction_1.jpg",
        title: "Explore 1",
        owner: "Richard",
        price: "1.5 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },    
]
class ExploreOne extends Component {
    state = {
        initData: {},
        data: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: data
        })
    }
    render() {
        return (
            <section className="explore-area load-more p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>{this.state.initData.pre_heading}</span>
                                    <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                                </div>
                                <div className="intro-btn">
                                    <a className="btn content-btn" href="/explore-3">{this.state.initData.btn_1}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {this.state.data.map((item, idx) => {
                            return (
                                <div key={`exo_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                                    <div className="card">
                                        <div className="image-over">
                                            <a href="/item-details">
                                                <img className="card-img-top" src={item.img} alt="" />
                                            </a>
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0">
                                            {/* Card Body */}
                                            <div className="card-body">
                                                <a href="/item-details">
                                                    <h5 className="mb-0">{item.title}</h5>
                                                </a>
                                                <div className="seller d-flex align-items-center my-3">
                                                    <span>Owned By</span>
                                                    <a href="/author">
                                                        <h6 className="ml-2 mb-0">{item.owner}</h6>
                                                    </a>
                                                </div>
                                                <div className="card-bottom d-flex justify-content-between">
                                                    <span>{item.price}</span>
                                                    <span>{item.count}</span>
                                                </div>
                                                <a className="btn btn-bordered-white btn-smaller mt-3" href="/login"><i className="icon-handbag mr-2" />Generate QR CODE </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <a id="load-btn" className="btn btn-bordered-white mt-5" href="#">{this.state.initData.btn_2}</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ExploreOne;