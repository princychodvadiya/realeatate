import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PropertTypeDetail(props) {

    let [propertydata, setpropertydata] = useState([]);
    const { id } = useParams();

    const getdata = async () => {
        try {
            const response = await fetch("http://localhost:8000/property");
            const data = await response.json()

            console.log(id);
            const propertyfilterdata = data.find((v) => v.id === id)
            setpropertydata(propertyfilterdata);

        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getdata()
    }, [])

    return (
        <div>
            {/* Single Product Start */}
            <div className="container-fluid py-5 mt-5">
                <div className="container py-5">
                    <div className="row g-4 mb-5">
                        <div className="col-lg-8 col-xl-9">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="border rounded">
                                        <a href="#">
                                            {/* <img src={`../${propertydata.image}`} className="img-fluid rounded" alt="Image" /> */}
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h4 className="fw-bold mb-3">{propertydata.property_address}</h4>
                                    <p className="mb-3">{propertydata.location}</p>
                                    <h5 className="fw-bold mb-3">{propertydata?.amount}$</h5>
                                    <div className="d-flex mb-4">
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <p className="mb-4">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                                    <p className="mb-4">Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish</p>
                                    <div className="input-group quantity mb-5" style={{ width: 100 }}>
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                                                <i className="fa fa-minus" />
                                            </button>
                                        </div>
                                        <input type="text" className="form-control form-control-sm text-center border-0" defaultValue={1} />
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                                                <i className="fa fa-plus" />
                                            </button>
                                        </div>
                                    </div>
                                    <a href="#" className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                                </div>
                                <div className="col-lg-12">
                                    <nav>
                                        <div className="nav nav-tabs mb-3">
                                            <button className="nav-link active border-white border-bottom-0" type="button" role="tab" id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about" aria-controls="nav-about" aria-selected="true">Description</button>
                                            <button className="nav-link border-white border-bottom-0" type="button" role="tab" id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission" aria-controls="nav-mission" aria-selected="false">Reviews</button>
                                        </div>
                                    </nav>
                                    <div className="tab-content mb-5">
                                        <div className="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                                            <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
                                                Susp endisse ultricies nisi vel quam suscipit </p>
                                            <p>Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish filefish Antarctic
                                                icefish goldeye aholehole trumpetfish pilot fish airbreathing catfish, electric ray sweeper.</p>
                                            <div className="px-2">
                                                <div className="row g-4">
                                                    <div className="col-6">
                                                        <div className="row bg-light align-items-center text-center justify-content-center py-2">
                                                            <div className="col-6">
                                                                <p className="mb-0">Weight</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="mb-0">1 kg</p>
                                                            </div>
                                                        </div>
                                                        <div className="row text-center align-items-center justify-content-center py-2">
                                                            <div className="col-6">
                                                                <p className="mb-0">Country of Origin</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="mb-0">Agro Farm</p>
                                                            </div>
                                                        </div>
                                                        <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                                            <div className="col-6">
                                                                <p className="mb-0">Quality</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="mb-0">Organic</p>
                                                            </div>
                                                        </div>
                                                        <div className="row text-center align-items-center justify-content-center py-2">
                                                            <div className="col-6">
                                                                <p className="mb-0">Сheck</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="mb-0">Healthy</p>
                                                            </div>
                                                        </div>
                                                        <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                                            <div className="col-6">
                                                                <p className="mb-0">Min Weight</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="mb-0">250 Kg</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                                            <div className="d-flex">
                                                <img src="img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{ width: 100, height: 100 }} alt />
                                                <div className>
                                                    <p className="mb-2" style={{ fontSize: 14 }}>April 12, 2024</p>
                                                    <div className="d-flex justify-content-between">
                                                        <h5>Jason Smith</h5>
                                                        <div className="d-flex mb-3">
                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star" />
                                                        </div>
                                                    </div>
                                                    <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic
                                                        words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <img src="img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{ width: 100, height: 100 }} alt />
                                                <div className>
                                                    <p className="mb-2" style={{ fontSize: 14 }}>April 12, 2024</p>
                                                    <div className="d-flex justify-content-between">
                                                        <h5>Sam Peters</h5>
                                                        <div className="d-flex mb-3">
                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star text-secondary" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </div>
                                                    </div>
                                                    <p className="text-dark">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic
                                                        words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="nav-vision" role="tabpanel">
                                            <p className="text-dark">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                                                amet diam et eos labore. 3</p>
                                            <p className="mb-0">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
                                                Clita erat ipsum et lorem et sit</p>
                                        </div>
                                    </div>
                                </div>
                                <form action="#">
                                    <h4 className="mb-5 fw-bold">Leave a Reply</h4>
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="border-bottom rounded">
                                                <input type="text" className="form-control border-0 me-4" placeholder="Yur Name *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="border-bottom rounded">
                                                <input type="email" className="form-control border-0" placeholder="Your Email *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="border-bottom rounded my-4">
                                                <textarea name id className="form-control border-0" cols={30} rows={8} placeholder="Your Review *" spellCheck="false" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="d-flex justify-content-between py-3 mb-5">
                                                <div className="d-flex align-items-center">
                                                    <p className="mb-0 me-3">Please rate:</p>
                                                    <div className="d-flex align-items-center" style={{ fontSize: 12 }}>
                                                        <i className="fa fa-star text-muted" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                </div>
                                                <a href="#" className="btn border border-secondary text-primary rounded-pill px-4 py-3"> Post Comment</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* Single Product End */}
        </div>

    );
}

export default PropertTypeDetail;