import { Recognizer, RecognizerResult } from '../recognizer'
import {
    Date, 
    Point, 
    Quadrilateral,
    MrtdDocumentType, 
    MrzResult, 
    EudlCountry, 
    DocumentFaceDetectorType,
    ImageExtensionFactors,
} from '../types'

/**
 * Result object for GermanyDlFrontRecognizer.
 */
export class GermanyDlFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date of birth of Germany DL owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of Germany DL. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issue of Germany DL. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name of the Germany DL owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issuing authority of the Germany DL. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * The last name of the Germany DL owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * The licence categories of the Germany DL. 
         */
        this.licenceCategories = nativeResult.licenceCategories;
        
        /** 
         * The licence number of the Germany DL. 
         */
        this.licenceNumber = nativeResult.licenceNumber;
        
        /** 
         * The place of birth of Germany DL owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * image of the signature if enabled with returnSignatureImage property. 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 * Recognizer which can scan front side of Germany national DL cards
 */
export class GermanyDlFrontRecognizer extends Recognizer {
    constructor() {
        super('GermanyDlFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of birth of Germany DL owner should be extracted.
         * 
         *  
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry of Germany DL should be extracted.
         * 
         *  
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if date of issue of Germany DL should be extracted.
         * 
         *  
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if first name of Germany DL owner should be extracted.
         * 
         *  
         */
        this.extractFirstName = true;
        
        /** 
         * Defines if issuing authority of Germany DL should be extracted.
         * 
         *  
         */
        this.extractIssuingAuthority = true;
        
        /** 
         * Defines if last name of Germany DL owner should be extracted.
         * 
         *  
         */
        this.extractLastName = true;
        
        /** 
         * Defines if licence categories of Germany DL should be extracted.
         * 
         *  
         */
        this.extractLicenceCategories = true;
        
        /** 
         * Defines if place of birth of Germany DL owner should be extracted.
         * 
         *  
         */
        this.extractPlaceOfBirth = true;
        
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
         * Sets whether signature image from ID card should be extracted.
         * 
         *  
         */
        this.returnSignatureImage = false;
        
        /** 
         * Property for setting DPI for signature images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         *  
         */
        this.signatureImageDpi = 250;
        
        this.createResultFromNative = function (nativeResult) { return new GermanyDlFrontRecognizerResult(nativeResult); }
    }
}