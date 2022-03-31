import { Recognizer, RecognizerResult } from '../recognizer'
import {
    Date,
    Point,
    Quadrilateral,
    MrtdDocumentType,
    MrzResult,
    DocumentFaceDetectorType,
    Country,
    Region,
    Type,
    DocumentImageColorStatus,
    DocumentImageMoireStatus,
    AnonymizationMode,
    RecognitionModeFilter,
    
    
    ImageExtensionFactors,
    DataMatchResult,
} from '../types'

/**
 * Result object for BlinkIdCombinedRecognizer.
 */
export class BlinkIdCombinedRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /**
         * The additional name information of the document owner.
         */
        this.additionalAddressInformation = nativeResult.additionalAddressInformation;
        
        /**
         * The additional name information of the document owner.
         */
        this.additionalNameInformation = nativeResult.additionalNameInformation;
        
        /**
         * The one more additional address information of the document owner.
         */
        this.additionalOptionalAddressInformation = nativeResult.additionalOptionalAddressInformation;
        
        /**
         * The address of the document owner.
         */
        this.address = nativeResult.address;
        
        /**
         * The current age of the document owner in years. It is calculated difference
         */
        this.age = nativeResult.age;
        
        /**
         * Back camera frame.
         */
        this.backCameraFrame = nativeResult.backCameraFrame;
        
        /**
         * Image analysis result for the scanned document back side image
         */
        this.backImageAnalysisResult = nativeResult.backImageAnalysisResult;
        
        /**
         * Status of the last back side recognition process.
         */
        this.backProcessingStatus = nativeResult.backProcessingStatus;
        
        /**
         * The data extracted from the back side visual inspection zone.
         */
        this.backVizResult = nativeResult.backVizResult;
        
        /**
         * Barcode camera frame.
         */
        this.barcodeCameraFrame = nativeResult.barcodeCameraFrame;
        
        /**
         * The data extracted from the barcode.
         */
        this.barcodeResult = nativeResult.barcodeResult;
        
        /**
         * The document class information.
         */
        this.classInfo = nativeResult.classInfo;
        
        /**
         * The date of birth of the document owner.
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /**
         * The date of expiry of the document.
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /**
         * Determines if date of expiry is permanent.
         */
        this.dateOfExpiryPermanent = nativeResult.dateOfExpiryPermanent;
        
        /**
         * The date of issue of the document.
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /**
         * The additional number of the document.
         */
        this.documentAdditionalNumber = nativeResult.documentAdditionalNumber;
        
        /**
         * Defines result of the data matching algorithm for scanned parts/sides of the document.
         */
        this.documentDataMatch = nativeResult.documentDataMatch;
        
        /**
         * The document number.
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /**
         * The one more additional number of the document.
         */
        this.documentOptionalAdditionalNumber = nativeResult.documentOptionalAdditionalNumber;
        
        /**
         * The driver license detailed info.
         */
        this.driverLicenseDetailedInfo = nativeResult.driverLicenseDetailedInfo;
        
        /**
         * The employer of the document owner.
         */
        this.employer = nativeResult.employer;
        
        /**
         * Checks whether the document has expired or not by comparing the current
         */
        this.expired = nativeResult.expired;
        
        /**
         * Face image from the document
         */
        this.faceImage = nativeResult.faceImage;
        
        /**
         * The fathers name of the document owner.
         */
        this.fathersName = nativeResult.fathersName;
        
        /**
         * The first name of the document owner.
         */
        this.firstName = nativeResult.firstName;
        
        /**
         * Front camera frame.
         */
        this.frontCameraFrame = nativeResult.frontCameraFrame;
        
        /**
         * Image analysis result for the scanned document front side image
         */
        this.frontImageAnalysisResult = nativeResult.frontImageAnalysisResult;
        
        /**
         * Status of the last front side recognition process.
         */
        this.frontProcessingStatus = nativeResult.frontProcessingStatus;
        
        /**
         * The data extracted from the front side visual inspection zone.
         */
        this.frontVizResult = nativeResult.frontVizResult;
        
        /**
         * Back side image of the document
         */
        this.fullDocumentBackImage = nativeResult.fullDocumentBackImage;
        
        /**
         * Front side image of the document
         */
        this.fullDocumentFrontImage = nativeResult.fullDocumentFrontImage;
        
        /**
         * The full name of the document owner.
         */
        this.fullName = nativeResult.fullName;
        
        /**
         * The issuing authority of the document.
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /**
         * The last name of the document owner.
         */
        this.lastName = nativeResult.lastName;
        
        /**
         * The localized name of the document owner.
         */
        this.localizedName = nativeResult.localizedName;
        
        /**
         * The marital status of the document owner.
         */
        this.maritalStatus = nativeResult.maritalStatus;
        
        /**
         * The mothers name of the document owner.
         */
        this.mothersName = nativeResult.mothersName;
        
        /**
         * The data extracted from the machine readable zone.
         */
        this.mrzResult = nativeResult.mrzResult != null ? new MrzResult(nativeResult.mrzResult) : null;
        
        /**
         * The nationality of the documet owner.
         */
        this.nationality = nativeResult.nationality;
        
        /**
         * The personal identification number.
         */
        this.personalIdNumber = nativeResult.personalIdNumber;
        
        /**
         * The place of birth of the document owner.
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /**
         * Status of the last recognition process.
         */
        this.processingStatus = nativeResult.processingStatus;
        
        /**
         * The profession of the document owner.
         */
        this.profession = nativeResult.profession;
        
        /**
         * The race of the document owner.
         */
        this.race = nativeResult.race;
        
        /**
         * Recognition mode used to scan current document.
         */
        this.recognitionMode = nativeResult.recognitionMode;
        
        /**
         * The religion of the document owner.
         */
        this.religion = nativeResult.religion;
        
        /**
         * The residential stauts of the document owner.
         */
        this.residentialStatus = nativeResult.residentialStatus;
        
        /**
         * {true} if recognizer has finished scanning first side and is now scanning back side,
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /**
         * The sex of the document owner.
         */
        this.sex = nativeResult.sex;
        
        /**
         * Signature image from the document
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 * A generic recognizer which can scan front and back side of the document.
 */
export class BlinkIdCombinedRecognizer extends Recognizer {
    constructor() {
        super('BlinkIdCombinedRecognizer');
        
        /**
         * Defines whether blured frames filtering is allowed.
         */
        this.allowBlurFilter = true;
        
        /**
         * Proceed with scanning the back side even if the front side result is uncertain.
         */
        this.allowUncertainFrontSideScan = false;
        
        /**
         * Defines whether returning of unparsed MRZ (Machine Readable Zone) results is allowed.
         */
        this.allowUnparsedMrzResults = false;
        
        /**
         * Defines whether returning unverified MRZ (Machine Readable Zone) results is allowed.
         */
        this.allowUnverifiedMrzResults = true;
        
        /**
         * Whether sensitive data should be removed from images, result fields or both.
         */
        this.anonymizationMode = AnonymizationMode.FullResult;
        
        /**
         * The DPI (Dots Per Inch) for face image that should be returned.
         */
        this.faceImageDpi = 250;
        
        /**
         * The DPI (Dots Per Inch) for full document image that should be returned.
         */
        this.fullDocumentImageDpi = 250;
        
        /**
         * The extension factors for full document image.
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
        /**
         * Configure the number of characters per field that are allowed to be inconsistent in data match.
         */
        this.maxAllowedMismatchesPerField = 0;
        
        /**
         * Padding is a minimum distance from the edge of the frame and it is defined
         */
        this.paddingEdge = 0.0;
        
        /**
         * Currently set recognition mode filter.
         */
        this.recognitionModeFilter = new RecognitionModeFilter();
        
        /**
         * Defines whether face image will be available in result.
         */
        this.returnFaceImage = false;
        
        /**
         * Defines whether full document image will be available in
         */
        this.returnFullDocumentImage = false;
        
        /**
         * Defines whether signature image will be available in result.
         */
        this.returnSignatureImage = false;
        
        /**
         * Configure the recognizer to save the raw camera frames.
         */
        this.saveCameraFrames = false;
        
        /**
         * Configure the recognizer to only work on already cropped and dewarped images.
         */
        this.scanCroppedDocumentImage = false;
        
        /**
         * The DPI (Dots Per Inch) for signature image that should be returned.
         */
        this.signatureImageDpi = 250;
        
        /**
         * Skip back side capture and processing step when back side of the document is not supported.
         */
        this.skipUnsupportedBack = false;
        
        /**
         * Whether result characters validatation is performed.
         */
        this.validateResultCharacters = true;
        
        this.createResultFromNative = function (nativeResult) { return new BlinkIdCombinedRecognizerResult(nativeResult); }
    }
}