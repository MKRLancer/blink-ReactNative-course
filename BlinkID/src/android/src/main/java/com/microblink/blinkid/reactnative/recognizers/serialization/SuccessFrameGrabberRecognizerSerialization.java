package com.microblink.blinkid.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.blinkid.entities.recognizers.Recognizer;
import com.microblink.blinkid.entities.recognizers.successframe.SuccessFrameGrabberRecognizer;
import com.microblink.blinkid.reactnative.recognizers.RecognizerSerialization;
import com.microblink.blinkid.reactnative.recognizers.RecognizerSerializers;
import com.microblink.blinkid.reactnative.SerializationUtils;

public final class SuccessFrameGrabberRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?> createRecognizer(ReadableMap jsonRecognizer) {
        // first obtain slave recognizer
        ReadableMap jsonSlaveRecognizer = jsonRecognizer.getMap("slaveRecognizer");
        Recognizer<?> slaveRecognizer = RecognizerSerializers.INSTANCE.getRecognizerSerialization(jsonSlaveRecognizer).createRecognizer(jsonSlaveRecognizer);
        return new SuccessFrameGrabberRecognizer(slaveRecognizer);
    }

    @Override
    public WritableMap serializeResult(Recognizer<?> recognizer) {
        SuccessFrameGrabberRecognizer sfgr = (SuccessFrameGrabberRecognizer) recognizer;
        WritableMap jsonSlaveResult = RecognizerSerializers.INSTANCE.getRecognizerSerialization(sfgr.getSlaveRecognizer()).serializeResult(sfgr.getSlaveRecognizer());

        SuccessFrameGrabberRecognizer.Result result = sfgr.getResult();

        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonRecognizerResultData(jsonResult, result);
        jsonResult.putMap("slaveRecognizerResult", jsonSlaveResult);
        jsonResult.putString("successFrame", SerializationUtils.encodeImageBase64(result.getSuccessFrame()));

        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "SuccessFrameGrabberRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return SuccessFrameGrabberRecognizer.class;
    }
}