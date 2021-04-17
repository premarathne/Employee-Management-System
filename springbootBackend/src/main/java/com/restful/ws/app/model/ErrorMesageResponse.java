package com.restful.ws.app.model;

import java.util.Date;

public class ErrorMesageResponse {
	
	private Date timestamp;
	private String message;
	
	
	
	public ErrorMesageResponse(Date timestamp, String message) {
		super();
		this.timestamp = timestamp;
		this.message = message;
	}

	public Date getTimestamp() {
		return timestamp;
	}
	
	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	
}
