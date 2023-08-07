# AWS S3 Front-End

Graphical interface for interacting with an S3 bucket.

S3 is a high-performance static storage solution provided by Amazon. In this project, images in JPEG or PNG format are stored in an S3 bucket.

An S3 bucket is a unique storage container in Amazon S3 used to organize and store data, including files, images, and other objects.

### Technologies Used:

- React
- Axios

### To Run Locally (Needs the download of [AWS S3 Back-End](https://github.com/Riccardo9190/aws-s3-backend))

- Clone this repository with ```git clone https://github.com/Riccardo9190/aws-s3-frontend.git```

- Access the app folder with ```cd aws-s3-frontend```

- Install all dependencies with ```npm install```

- Set environment variable for the API:

```shell
echo "REACT_APP_BASE_API=http://localhost:8080 > .env
```

- Run the aplication with  ```npm start```

<hr/>

## Project Images

After running the app, React will open the URL 'localhost:3000' by default. As a result, you will see an empty page like this:

<img src="https://github.com/Riccardo9190/aws-s3-frontend/blob/master/public/image-1.png" /> 

Click the 'Procurar' button to upload an image in JPEG or PNG format from your directories. After uploading, click 'Submit,' and the image will be stored in the S3 bucket and displayed on the screen. An example:

<img src="https://github.com/Riccardo9190/aws-s3-frontend/blob/master/public/image-2.png" /> 

You can add more than one image:

<img src="https://github.com/Riccardo9190/aws-s3-frontend/blob/master/public/image-3.png" /> 
<img src="https://github.com/Riccardo9190/aws-s3-frontend/blob/master/public/image-4.png" /> 

All these images are stored in the S3 bucket:

<img src="https://github.com/Riccardo9190/aws-s3-frontend/blob/master/public/image-5.png" /> 



