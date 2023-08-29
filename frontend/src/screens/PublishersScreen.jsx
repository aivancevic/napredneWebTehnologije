import { useEffect, useState} from "react";
import axios from 'axios';
import React from 'react';
import Publisher from '../components/Publisher.js';

const PublishersScreen = () => {
    const [publisherData, setPublishers] = useState([]);

    useEffect(() => {
      axios.get('/api/publisher')
        .then(response => {
          setPublishers(response.data);
        })
        .catch(error => {
          console.error('Error fetching publishers:', error);
        });
    }, []);

  return (
    <Publisher publishers = {publisherData} />
  );
};

export default PublishersScreen;
