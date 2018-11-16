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
 * Result object for SwitzerlandPassportRecognizer.
 */
export class SwitzerlandPassportRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The authority of Swiss passport. 
         */
        this.authority = nativeResult.authority;
        
        /** 
         * Defines holder's date of birth if it is successfully converted to result from MRZ date format: <code>YYMMDD</code>. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * Defines date of expiry if it is successfully converted to result from MRZ date format: <code>YYMMDD</code>. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issue of Swiss passport. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * Defines document code. Document code contains two characters. For MRTD the first character shall 
         */
        this.documentCode = nativeResult.documentCode;
        
        /** 
         * Defines document number. Document number contains up to 9 characters. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The given name of the Swiss passport owner. 
         */
        this.givenName = nativeResult.givenName;
        
        /** 
         * The height of the Swiss passport owner. 
         */
        this.height = nativeResult.height;
        
        /** 
         * Defines three-letter or two-letter code which indicate the issuing State. Three-letter codes are based 
         */
        this.issuer = nativeResult.issuer;
        
        /** 
         * Defines true if Machine Readable Zone has been parsed, false otherwise. 
         */
        this.mrzParsed = nativeResult.mrzParsed;
        
        /** 
         * Defines the entire Machine Readable Zone text from ID. This text is usually used for parsing 
         */
        this.mrzText = nativeResult.mrzText;
        
        /** 
         * Defines true if all check digits inside MRZ are correct, false otherwise. 
         */
        this.mrzVerified = nativeResult.mrzVerified;
        
        /** 
         * Defines nationality of the holder represented by a three-letter or two-letter code. Three-letter 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The date of birth of Swiss passport. 
         */
        this.nonMrzDateOfBirth = nativeResult.nonMrzDateOfBirth != null ? new Date(nativeResult.nonMrzDateOfBirth) : null;
        
        /** 
         * The date of expiry of Swiss passport. 
         */
        this.nonMrzDateOfExpiry = nativeResult.nonMrzDateOfExpiry != null ? new Date(nativeResult.nonMrzDateOfExpiry) : null;
        
        /** 
         * The sex of the Swiss passport owner. 
         */
        this.nonMrzSex = nativeResult.nonMrzSex;
        
        /** 
         * Defines first optional data.<code>null</code> or empty string if not available. 
         */
        this.opt1 = nativeResult.opt1;
        
        /** 
         * Defines second optional data.<code>null</code> or empty string if not available. 
         */
        this.opt2 = nativeResult.opt2;
        
        /** 
         * The passport number of Swiss passport. 
         */
        this.passportNumber = nativeResult.passportNumber;
        
        /** 
         * The place of birth of the Swiss passport owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * Defines the primary indentifier. If there is more than one component, they are separated with space. 
         */
        this.primaryId = nativeResult.primaryId;
        
        /** 
         * Defines the secondary identifier. If there is more than one component, they are separated with space. 
         */
        this.secondaryId = nativeResult.secondaryId;
        
        /** 
         * Defines sex of the card holder. Sex is specified by use of the single initial, 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * The surname of the Swiss passport owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 *  Recognizer which scans Swiss passports.
 * 
 */
export class SwitzerlandPassportRecognizer extends Recognizer {
    constructor() {
        super('SwitzerlandPassportRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * {true} if the authority is being extracted, {false} otherwise. 
         */
        this.extractAuthority = true;
        
        /** 
         * {true} if the date of birth is being extracted, {false} otherwise. 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * {true} if the date of expiry is being extracted, {false} otherwise. 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * {true} if the date of issue is being extracted, {false} otherwise. 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * {true} if given name is being extracted, {false} otherwise. 
         */
        this.extractGivenName = true;
        
        /** 
         * {true} if the height is being extracted, {false} otherwise. 
         */
        this.extractHeight = true;
        
        /** 
         * {true} if the authority is being extracted, {false} otherwise. 
         */
        this.extractPassportNumber = true;
        
        /** 
         * {true} if the place of birth is being extracted, {false} otherwise. 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * {true} if the sex is being extracted, {false} otherwise. 
         */
        this.extractSex = true;
        
        /** 
         * {true} if surname is being extracted, {false} otherwise. 
         */
        this.extractSurname = true;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new SwitzerlandPassportRecognizerResult(nativeResult); }
    }
}