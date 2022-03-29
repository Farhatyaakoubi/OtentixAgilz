import React, { Component } from 'react';

const initData = {
    pre_heading: "explor 5",
    heading: "Exclusive Digital Assets",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
    filter_1: "All",
    filter_2: "Art",
    filter_3: "Music",
    filter_4: "Collectibles",
    filter_5: "Sports"
}

const data = [
    {
        id: "1",
        group: '["art","sports"]',
        img: "/img/auction_1.jpg",
        author: "/img/avatar_1.jpg",
        title: "Virtual Worlds",
        content: "ERC-729",
        price: "4.37 BNB",
        likes: "154"
    }
  
]

class ExploreSix extends Component {
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
            <div>
                <div className="row justify-content-center text-center mt-5 mt-lg-0">
                    <div className="col-12">
                        {/* Explore Menu */}
                        <div className="explore-menu btn-group btn-group-toggle flex-wrap justify-content-center text-center mb-4" data-toggle="buttons">
                            <label className="btn active d-table text-uppercase p-2">
                                <input type="radio" defaultValue="all" defaultChecked className="explore-btn" />
                                <span>{this.state.initData.filter_1}</span>
                            </label>
                            <label className="btn d-table text-uppercase p-2">
                                <input type="radio" defaultValue="art" className="explore-btn" />
                                <span>{this.state.initData.filter_2}</span>
                            </label>
                            <label className="btn d-table text-uppercase p-2">
                                <input type="radio" defaultValue="music" className="explore-btn" />
                                <span>{this.state.initData.filter_3}</span>
                            </label>
                            <label className="btn d-table text-uppercase p-2">
                                <input type="radio" defaultValue="collectibles" className="explore-btn" />
                                <span>{this.state.initData.filter_4}</span>
                            </label>
                            <label className="btn d-table text-uppercase p-2">
                                <input type="radio" defaultValue="sports" className="explore-btn" />
                                <span>{this.state.initData.filter_5}</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row items explore-items">
                    {this.state.data.map((item, idx) => {
                        return (
                            <div key={`eds_${idx}`} className="col-12 col-md-6 item explore-item" data-groups={item.group}>
                                <div className="card no-hover text-center">
                                    <div className="image-over">
                                        <a href="/item-details">
                                            <img className="card-img-top" src={item.img} alt="" />
                                        </a>
                                        {/* Author */}
                                        <a className="author" href="/authors">
                                            <div className="author-thumb avatar-lg">
                                                <img className="rounded-circle" src={item.author} alt="" />
                                            </div>
                                        </a>
                                    </div>
                                    {/* Card Caption */}
                                    <div className="card-caption col-12 p-0">
                                        {/* Card Body */}
                                        <div className="card-body mt-4">
                                            <a href="/item-details">
                                                <h5 className="mb-2">{item.title}</h5>
                                            </a>
                                            <span>{item.content}</span>
                                            <hr />
                                            <div className="card-bottom d-flex justify-content-between">
                                                <span>{item.price}</span>
                                                <span><i className="icon-heart mr-2" />{item.likes}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ExploreSix;