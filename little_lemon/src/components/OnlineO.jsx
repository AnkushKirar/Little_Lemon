import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import image from '../assets/images/Asset 14@4x.png';
import { Link } from 'react-router-dom';

const OnlineO = () => {
  const pdfContentRef = useRef(null);

  const downloadPDF = () => {
    const content = pdfContentRef.current;
    const pdfOptions = { margin: 10, filename: 'receipt.pdf', image: { type: 'jpeg', quality: 0.98 } };

    html2pdf().from(content).set(pdfOptions).outputPdf((pdf) => {
      const pdfBlob = new Blob([pdf], { type: 'application/pdf' });
      const pdfUrl = URL.createObjectURL(pdfBlob);

      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'receipt.pdf';
      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
    });
  };

  return (
    <div className='grid_container'>
      <h2>Receipt</h2>

      <div className='Online_section' ref={pdfContentRef}>
        <img src={image} alt='logo' className='img' />

        <div className='Online_main'>
          <p className='Online_element'>Order Id: 324431</p>
          <p className='Online_element'>Name: Ankush Yadav</p>
          <p className='Online_element'>Email: ankush@.com</p>
          <p className='Online_element'>Date: 15/01/2024</p>
          <p className='Online_element'>Time: 10:30PM</p>
          <p className='Online_element'>Number of People: 5</p>
        </div>

        <div className='Online_button_div'>
          <Link to='/TableB' className='Link'><button className='Online_button' style={{ backgroundColor: 'red' }}>Reset</button></Link>
          <button onClick={()=>downloadPDF()} className='Online_button' style={{ backgroundColor: 'green' }}>Download PDF</button>
        </div>
      </div>
    </div>
  );
};

export default OnlineO;
