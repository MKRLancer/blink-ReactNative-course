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
 * Result object for SloveniaIdBackRecognizer.
 */
export class SloveniaIdBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of the Slovenian ID owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The authority of the Slovenian ID. 
         */
        this.authority = nativeResult.authority;
        
        /** 
         * Holder's date of birth. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * Date of expiry of the document. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * Date of issue of the Slovenian ID. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * The document code. Document code contains two characters. For MRTD the first character
         * shall be A, C or I. The second character shall be discretion of the issuing State or organization
         * except that V shall not be used, and C shall not be used after A except in the crew member
         * certificate. On machine-readable passports (MRP) first character shall be P to designate an MRP.
         * One additional letter may be used, at the discretion of the issuing State or organization,
         * to designate a particular MRP. If the second character position is not used for this purpose, it
         * shall be filled by the filter character <. 
         */
        this.documentCode = nativeResult.documentCode;
        
        /** 
         * Unique number of the document. Document number contains up to 9 characters.
         * Element does not exist on US Green Card. To see which document was scanned use documentType property. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * Three-letter code which indicate the issuing State.
         * Three-letter codes are based on Alpha-3 codes for entities specified in
         * ISO 3166-1, with extensions for certain States. 
         */
        this.issuer = nativeResult.issuer;
        
        /** 
         * Boolean value which denotes that MRTD result is successfully parsed. When the result is parsed, all
         * properties below are present.
         * 
         * If in the PPMrtdRecognizerSettings you specified allowUnparsedResults = true, then it can happen that
         * MRTDRecognizerResult is not parsed. When this happens, this property will be equal to true.
         * 
         * In that case, you can use rawOcrResult property to obtain the raw result of the OCR process, so you can
         * implement MRTD parsing in your application.
         * 
         *  @return true if MRTD Recognizer result was successfully parsed and all the fields are extracted. false otherwise. 
         */
        this.mrzParsed = nativeResult.mrzParsed;
        
        /** 
         * The entire Machine Readable Zone text from ID. This text is usually used for parsing
         * other elements. 
         */
        this.mrzText = nativeResult.mrzText;
        
        /** 
         * true if all check digits inside MRZ are correct, false otherwise.
         * More specifically, true if MRZ complies with ICAO Document 9303 standard, false otherwise. 
         */
        this.mrzVerified = nativeResult.mrzVerified;
        
        /** 
         * Nationality of the holder represented by a three-letter code. Three-letter codes are based
         * on Alpha-3 codes for entities specified in ISO 3166-1, with extensions for certain States. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * First optional data. Returns nil or empty string if not available.
         * Element does not exist on US Green Card. To see which document was scanned use documentType property. 
         */
        this.opt1 = nativeResult.opt1;
        
        /** 
         * Second optional data. Returns nil or empty string if not available.
         * Element does not exist on Passports and Visas. To see which document was scanned use documentType property. 
         */
        this.opt2 = nativeResult.opt2;
        
        /** 
         * Returns the primary indentifier. If there is more than one component, they are separated with space.
         * 
         *  @return primary id of a card holder. 
         */
        this.primaryId = nativeResult.primaryId;
        
        /** 
         * Returns the secondary identifier. If there is more than one component, they are separated with space.
         * 
         *  @return secondary id of a card holder 
         */
        this.secondaryId = nativeResult.secondaryId;
        
        /** 
         * Sex of the card holder. Sex is specified by use of the single initial, capital
         * letter F for female, M for male or < for unspecified. 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 * Class for configuring Slovenian ID Back Recognizer.
 * 
 * Slovenian ID Back recognizer is used for scanning back side of Slovenian ID.
 */
export class SloveniaIdBackRecognizer extends Recognizer {
    constructor() {
        super('SloveniaIdBackRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         *  Defines if issuing authority of Slovenian ID should be extracted
         * 
         *   
         */
        this.extractAuthority = true;
        
        /** 
         *  Defines if date of issue of Slovenian ID should be extracted
         * 
         *   
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Sets whether full document image of ID card should be extracted.
         * 
         *  
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new SloveniaIdBackRecognizerResult(nativeResult); }
    }
}