function FouthSection(props){
    return(
        <section id="services">
        <div id="divFourthSection"></div>
        <div id="accordionFourthSection">
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Sed ut perspiciatis
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Ut enim ad minima veniam
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum suscipit, sequi facere autem quo architecto dolorem repellat corporis eligendi fugiat, iure veniam quisquam possimus laudantium dolores non sit, modi animi!.</div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Sit amet, consectetur, adipisci
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui sequi quae libero ipsum, suscipit delectus cupiditate numquam autem placeat doloremque nobis debitis necessitatibus accusantium totam. Minima repudiandae iusto consequatur dolore!</div>
                </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default FouthSection;