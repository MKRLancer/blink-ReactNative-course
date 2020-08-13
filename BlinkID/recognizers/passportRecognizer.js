import { Recognizer, RecognizerResult } from '../recognizer'
import {
    Date, 
    Point, 
    Quadrilateral,
    MrtdDocumentType, 
    MrzResult,
    DocumentFaceDetectorType,
    ImageExtensionFactors,
    DataMatchResult,
    Country,
    Region,
    Type,
    DocumentImageColorStatus,
    DocumentImageMoireStatus,
    AnonymizationMode,
    
    
    RecognitionModeFilter,
} from '../types'

/**
 * Result object for PassportRecognizer.
 */
export class PassportRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * Digital signature of the recognition result. Available only if enabled with signResult property.
         */
        this.digitalSignature = nativeResult.digitalSignature;
        
        /** 
         * Version of the digital signature. Available only if enabled with signResult property.
         */
        this.digitalSignatureVersion = nativeResult.digitalSignatureVersion;
        
        /** 
         * face image from the document if enabled with returnFaceImage property.
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property.
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The data extracted from the machine readable zone. 
         */
        this.mrzResult = nativeResult.mrzResult != null ? new MrzResult(nativeResult.mrzResult) : null;
        
    }
}

/**
 * Recognizer which can scan all passports with MRZ.
 */
export class PassportRecognizer extends Recognizer {
    constructor() {
        super('PassportRecognizer');
        
        /** 
         * Defines whether to anonymize Netherlands MRZ
         *
         *
         */
        this.anonymizeNetherlandsMrz = true;
        
        /** 
         * Defines if glare detection should be turned on/off.
         *
         *
         */
        this.detectGlare = true;
        
        /** 
         * Property for setting DPI for face images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         *
         *
         */
        this.faceImageDpi = 250;
        
        /** 
         * Property for setting DPI for full document images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         *
         *
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Image extension factors for full document image.
         *
         * @see ImageExtensionFactors
         *
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
        /** 
         * Sets whether face image from ID card should be extracted
         *
         *
         */
        this.returnFaceImage = false;
        
        /** 
         * Sets whether full document image of ID card should be extracted.
         *
         *
         */
        this.returnFullDocumentImage = false;
        
        /** 
         * Whether or not recognition result should be signed.
         *
         *
         */
        this.signResult = false;
        
        this.createResultFromNative = function (nativeResult) { return new PassportRecognizerResult(nativeResult); }
    }
}