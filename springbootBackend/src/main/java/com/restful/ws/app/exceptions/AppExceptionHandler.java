package com.restful.ws.app.exceptions;

import java.util.Date;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.restful.ws.app.model.ErrorMesageResponse;

@ControllerAdvice
public class AppExceptionHandler extends ResponseEntityExceptionHandler {
	
	@ExceptionHandler(value= {Exception.class})
	public ResponseEntity<Object>handleAnyException(Exception ex,WebRequest request){
		
		ErrorMesageResponse errormessage=new ErrorMesageResponse(new Date(),ex.getLocalizedMessage());
		return new ResponseEntity<>(errormessage,new HttpHeaders(),HttpStatus.INTERNAL_SERVER_ERROR);
		
	}
	
	@ExceptionHandler(value= {NullPointerException.class})
	public ResponseEntity<Object>handleNullPointerException(NullPointerException ex,WebRequest request){
		
		String errorMessageDescription=ex.getLocalizedMessage();
		if(errorMessageDescription==null)errorMessageDescription=ex.toString();
		
		ErrorMesageResponse errormessage=new ErrorMesageResponse(new Date(),errorMessageDescription);
		return new ResponseEntity<>(errormessage,new HttpHeaders(),HttpStatus.INTERNAL_SERVER_ERROR);
		
	}
	
	@ExceptionHandler(value= {ResourceNotFoundException.class})
	public ResponseEntity<Object>handleUserServiceException(ResourceNotFoundException ex,WebRequest request){
		
		String errorMessageDescription=ex.getLocalizedMessage();
		if(errorMessageDescription==null)errorMessageDescription=ex.toString();
		
		ErrorMesageResponse errormessage=new ErrorMesageResponse(new Date(),errorMessageDescription);
		return new ResponseEntity<>(errormessage,new HttpHeaders(),HttpStatus.INTERNAL_SERVER_ERROR);
		
	}
}
