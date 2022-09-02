import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const requestDetails = () => {
    return ( 
        <Container fluid className="requestdetails__container">
            <div className='requestdetails__content'>
                <h2>David Harbour requested to use Web-Design Service</h2>
                <p class="lead">Request Details</p>
                <hr></hr>
        <Row className="justify-content-start">
            <Col md={1}>
                <div className='requestdetails__grid'>
                    <h6>Date:</h6>
                    <h6>Time:</h6>
                    <h6>Status:</h6>
                    <br></br><br></br>
                    <h6>Message</h6> 
                </div>
            </Col>
            <Col md={2}>
                <div className='requestdetails__grid'>
                    <h6>12.09.2022</h6>
                    <h6>14:00</h6>
                    <h6>Pending</h6>
                </div>
            </Col>
            <Col md={2}>
            <h6>Address: 1600 Pennsylvania Avenue NW Washington, D.C. 20500 U.S.</h6>
            </Col>
        </Row>
            <Col md={12} className="requestdetails__chatbox">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquid cum magni modi rerum? Quas obcaecati quaerat qui illum! Dignissimos repellendus qui eaque iusto quisquam quasi, in amet dolorem harum ab magni, eveniet, eius aut laudantium voluptas unde nisi soluta ratione. Cum, atque obcaecati. Quam ab dolorem dicta iste aut quaerat nam esse, perferendis eveniet dolorum officiis, quod, ipsam consectetur rerum voluptate doloribus ex. Nihil aperiam iusto nobis sapiente. Optio culpa laudantium modi eveniet nihil minus nisi assumenda odio numquam commodi! Odit nesciunt atque aperiam rem adipisci, reprehenderit repellat nobis quae, illo obcaecati, dolore consequuntur aut eius. Itaque ratione tempora debitis nostrum, quisquam esse est, corrupti amet nam totam voluptate quibusdam ipsum suscipit. Harum fuga voluptas dolorem quidem iste necessitatibus, iusto eos accusantium deleniti delectus nobis aliquid vero, quisquam autem sit, ad perferendis! Earum illo quo quae deserunt nisi unde nam, officia laboriosam atque voluptatem iure repellendus officiis, qui reprehenderit deleniti eos rerum optio autem totam nesciunt saepe adipisci quam facilis quaerat. Officia voluptatem at esse nulla ea harum nostrum, consectetur similique natus enim. Nobis inventore ut dicta quas. Voluptatum voluptatem quis esse dignissimos eligendi, quaerat voluptatibus iste vitae totam ipsa velit eius commodi? Esse neque provident unde pariatur est debitis vel eos ullam ad iure nemo similique eaque, minima, tempore voluptas laboriosam doloribus quo veritatis minus possimus ea voluptatum ipsam? Ratione dicta quisquam odio vero adipisci autem quod, atque perspiciatis nemo eaque minima debitis repudiandae incidunt sequi modi sint expedita obcaecati aliquam voluptas natus ullam optio aspernatur. Aspernatur labore voluptatibus nostrum fuga natus optio, repellendus ab quisquam totam, fugit dolores officiis aut nulla tempora animi officia excepturi ea. Ab expedita magnam nobis corrupti iste itaque debitis aperiam quia dolorum. Nemo, consectetur. Necessitatibus vel magni culpa quae alias officia autem quis repudiandae laudantium eaque accusantium, cumque sapiente, sed esse at rem? Voluptatibus, eaque fugit iusto accusantium hic neque autem minus totam temporibus maiores assumenda quibusdam quasi aspernatur velit dolor error fuga perferendis possimus. Repellendus, libero rem esse saepe itaque odit voluptates placeat earum deleniti labore id non amet. Ea ipsum ipsa neque reprehenderit quia explicabo rerum natus, aspernatur optio, laborum odit, enim quod totam molestias asperiores. Ipsum dolorum, perspiciatis corrupti veniam natus dolores blanditiis, repellat aliquid esse amet iusto, officiis nisi totam. Aspernatur dicta vel ipsam architecto vitae repudiandae eos, pariatur laudantium ea sint, error fugit perferendis? Explicabo ad cumque hic culpa tenetur unde assumenda aperiam veritatis accusantium soluta laudantium ratione dolorum, consectetur nam in cum omnis! Pariatur consequatur neque cumque vitae modi libero magnam laudantium, eius necessitatibus veniam magni voluptatibus quia natus, fugit aliquam! At reprehenderit soluta sunt architecto laudantium consectetur, quasi error aperiam autem voluptas eius impedit officiis eligendi. Aspernatur dignissimos commodi voluptates, nulla reiciendis corrupti facilis similique eligendi distinctio id esse, dolor voluptatibus a repudiandae rem, laboriosam asperiores recusandae. Architecto ut, autem, a magni recusandae odit possimus eaque dignissimos aut nobis suscipit quidem in neque, at perferendis.
                </p>
            </Col>
            </div>
        </Container>

     );
}
 
export default requestDetails;