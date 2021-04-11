package com.ny.fun.stocktracker.dto;

public class ResponseHome {

    private String data[];
    private String errors[];

    public String[] getData() {
        return data;
    }

    public void setData(String[] data) {
        this.data = data;
    }

    public String[] getErrors() {
        return errors;
    }

    public void setErrors(String[] errors) {
        this.errors = errors;
    }


}
