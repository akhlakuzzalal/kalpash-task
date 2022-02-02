import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import CloseIcon from '@mui/icons-material/Close';
import useData from '../../../hooks/useData';

const Post = ({post}) => {
    const[modalShow,setModalShow] = useState(false);
    const {active} = useData();

    
    return (
       <>
        <div className={active==='grid'?'col-md-4 col-12':'col-12'}>
           <div className={active==='grid'?'post-box':'post-list'}>
            <h3 className={active==='grid'?'close-btn':'close-btn d-none'}><CloseIcon /></h3>
            
           <div onClick={()=>setModalShow(true)} className={'post-item'}>
            <h4 className='post-id'>{post.id}</h4>
            <h3 className='text-start'>{post.title.slice(0,10)}....</h3>
            <p className='text-start'>{post.body.slice(0,80)}....</p>
           </div>
           <CloseIcon className={active==='grid'?'d-none':''}/>
           </div>
        </div>
        <Modal
            show={modalShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                  User Id {post.userId}
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
         <h4>{post.title}</h4>
            <p>
                {post.body}
         </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>setModalShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
       </>
    );
};

export default Post;