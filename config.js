// ====================================================================
// CONFIG — the ONE place you need to edit.
// ====================================================================
// 1. Open your Employee master file as a native GOOGLE SHEET
//    (if it's currently an uploaded .xlsx, open it in Google Sheets
//    then go to File > Save as Google Sheets).
// 2. File > Share > Publish to web > choose the correct sheet/tab >
//    format "Comma-separated values (.csv)" > Publish.
// 3. Copy the URL it gives you and paste it below, replacing the
//    placeholder.
// 4. Make sure the Sheet's sharing is "Anyone with the link - Viewer"
//    (Publish to web alone is usually enough, but this avoids issues).
// 5. Every employee PHOTO in Google Drive must also be shared as
//    "Anyone with the link - Viewer", otherwise the photo won't load.
// ====================================================================

const CONFIG = {
  // Paste your "Publish to web" CSV link here:
  SHEET_CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSitL2dZtMWea2Qs5HMHQD6mpk1nhcX36su9E3t6oqf_1_6E0nCBsBVBFmlA6kvgQ/pub?output=csv",

  // The exact column header names in your sheet (edit only if you
  // rename columns in the sheet later).
  COLUMNS: {
    empCode: "Emp Code",
    name: "Employee Name",
    department: "Department",
    designation: "Designation",
    dob: "Date of Birth",
    doj: "Date of Joining",
    bloodGroup: "Blood Group",
    contact: "Employee Contact Number",
    emergencyContact: "Emergerncy Contact Number",
    photo: "Photo"
  }
};

// Turns any Google Drive share link (either
// "https://drive.google.com/open?id=XXXX" or
// "https://drive.google.com/file/d/XXXX/view?..." )
// into a direct, embeddable image URL.
function driveLinkToImageUrl(link) {
  if (!link) return null;
  let id = null;
  const openMatch = link.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  const fileMatch = link.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (openMatch) id = openMatch[1];
  else if (fileMatch) id = fileMatch[1];
  if (!id) return null;
  return `https://drive.google.com/thumbnail?id=${id}&sz=w800`;
}
