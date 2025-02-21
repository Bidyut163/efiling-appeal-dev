module.exports = function (pdfDoc, appeal) {
    pdfDoc.font('Times-Roman');
    pdfDoc.fontSize(12).text('FORM C', { align: 'center' }).moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('APPEAL TO APPELLATE TRIBUNAL', { align: 'center' })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('Appeal under Section 44', {
            align: 'center',
            underline: true,
        })
        .moveDown(1.0);
    pdfDoc
        .fontSize(12)
        .text("For use of Appellate Tribunal's office : ", {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('Date of filing :_________________________________ ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('Date of receipt by post :__________________________ ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('Registration No. :_______________________________ ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('Signature :____________________________________ ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('Authorized Officer :_____________________________ ', {
            align: 'left',
        })
        .moveDown(1.5);
    pdfDoc
        .fontSize(12)
        .text('IN THE ASSAM REAL ESTATE APPELLATE TRIBUNAL', {
            align: 'center',
        })
        .moveDown(1.5);
    pdfDoc
        .fontSize(12)
        .text('(Name of place)', { align: 'left' })
        .moveDown(0.5);
    pdfDoc.fontSize(12).text('Between', { align: 'left' }).moveDown(1.5);
    pdfDoc
        .fontSize(12)
        .text('_______________________________________Appellant(s)', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc.fontSize(12).text('And', { align: 'left' }).moveDown(1.5);
    pdfDoc
        .fontSize(12)
        .text('_______________________________________Respondent(s)', {
            align: 'left',
        })
        .moveDown(1.5);
    pdfDoc
        .fontSize(12)
        .text('Details of Appeal : ', { align: 'left' })
        .moveDown(1.0);
    pdfDoc
        .fontSize(11)
        .text('1) Particulars of the appellants: ', { align: 'left' });
    pdfDoc
        .fontSize(11)
        .text('  i)    Name of the appellant : ' + appeal.fullname, {
            align: 'left',
        });
    pdfDoc
        .fontSize(11)
        .text(
            '  ii)   Address of  the existing office / residence of the appellant :' +
                appeal.ar_line1 +
                ', ' +
                appeal.ar_line2 +
                ', ' +
                appeal.ar_country +
                ', ' +
                appeal.ar_state +
                ', ' +
                (appeal.ar_landmark ? `${appeal.ar_landmark}, ` : '') +
                appeal.ar_city +
                ', ' +
                appeal.ar_district +
                ', ' +
                appeal.ar_pin,
            {
                align: 'left',
            }
        );
    pdfDoc
        .fontSize(11)
        .text(
            '  iii)  Address for service of all notices : ' +
                appeal.as_line1 +
                ', ' +
                appeal.as_line2 +
                ', ' +
                appeal.as_country +
                ', ' +
                appeal.as_state +
                ', ' +
                (appeal.as_landmark ? `${appeal.as_landmark}, ` : '') +
                appeal.as_city +
                ', ' +
                appeal.as_district +
                ', ' +
                appeal.as_pin,
            {
                align: 'left',
            }
        );
    pdfDoc
        .fontSize(11)
        .text(
            '  iv)  Contact Details (Phone number, e-mail, Fax Number etc.) : ' +
                appeal.appellant_mobile_no +
                ', ' +
                appeal.appellant_email_id,
            {
                align: 'left',
            }
        )
        .moveDown(2.0);
    pdfDoc.fontSize(11).text('2) Particulars of the respondents : ', {
        align: 'left',
    });
    pdfDoc
        .fontSize(11)
        .text(' i)    Name(s) of respondent : ' + appeal.res_fullname, {
            align: 'left',
        });
    pdfDoc
        .fontSize(11)
        .text(
            ' ii)   Office address of the respondent : ' +
                appeal.res_ao_line1 +
                ', ' +
                appeal.res_ao_line2 +
                ', ' +
                appeal.res_ao_country +
                ', ' +
                appeal.res_ao_state +
                ', ' +
                (appeal.res_ao_landmark ? `${appeal.res_ao_landmark}, ` : '') +
                appeal.res_ao_city +
                ', ' +
                appeal.res_ao_district +
                ', ' +
                appeal.res_ao_pin,
            {
                align: 'left',
            }
        );
    pdfDoc
        .fontSize(11)
        .text(
            ' iii)  Address for service of all notices : ' +
                appeal.res_as_line1 +
                ', ' +
                appeal.res_as_line2 +
                ', ' +
                appeal.res_as_country +
                ', ' +
                appeal.res_as_state +
                ', ' +
                (appeal.res_as_landmark ? `${appeal.res_as_landmark}, ` : '') +
                appeal.res_as_city +
                ', ' +
                appeal.res_as_district +
                ', ' +
                appeal.res_as_pin,
            {
                align: 'left',
            }
        );
    pdfDoc
        .fontSize(11)
        .text(
            ' iv)  Contact Details (Phone number, e-mail, Fax Number etc.) : ' +
                appeal.res_mobile_no +
                ', ' +
                appeal.res_email_id,
            {
                align: 'left',
            }
        )
        .moveDown(2.0);
    pdfDoc
        .fontSize(11)
        .text('3) Jurisdiction of the Appellant Tribunal : ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(11)
        .text(
            'a) The appellant declares that the subject matter of the appeal falls within the jurisdiction of the Appellate Tribunal: Yes',
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(11)
        .text('b) Project Registration No : ' + appeal.reg_num, {
            align: 'left',
        })
        .moveDown(2.0);
    pdfDoc
        .fontSize(11)
        .text('4) Limitation : ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(11)
        .text(
            'The appellant declares that the appeal is within the limitation specified in sub-section (2) of section 44. ' +
                (appeal.is_limitation_specified ? 'Yes' : 'No'),
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(11)
        .text('OR ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(11)
        .text(
            'If the appeal is filed after the expiry of the limitation period specified under sub-section(2) of section 44 specify reasons for delay. ' +
                appeal.reason_for_delay,
            {
                align: 'left',
            }
        )
        .moveDown(2.0);
    pdfDoc
        .fontSize(11)
        .text('5) Facts of the case : ', {
            align: 'left',
        })
        .moveDown(1.0);
    pdfDoc
        .fontSize(11)
        .text(
            '(Give a concise statement of facts and grounds of appeal against the specific order of the Authority or the Adjudicating Officer; as the case may be passed under section(s) _______________________________of the Act. ',
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(11)
        .text(appeal.facts_of_case.replace(/[^ -~]+/g, '\n\n'))
        .moveDown(2.0);
    pdfDoc
        .fontSize(11)
        .text('6) Grounds of Appeal : ', {
            align: 'left',
        })
        .moveDown(0.5);

    pdfDoc
        .fontSize(11)
        .text(appeal.ground_of_appeal.replace(/[^ -~]+/g, '\n\n'))
        .moveDown(2.0);
    pdfDoc
        .fontSize(11)
        .text('7) Relief(s) sought : ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(11)
        .text(
            'In view of the facts mentioned in paragraph 5 above, the appellant prays for the following relief(s) __________________________________________. ',
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(11)
        .text(
            '[Specify below the relief(s) sought explaining the grounds of relief(s) and the legal provisions (if any) relied upon] : ',
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(11)
        .text(appeal.reliefs_sought.replace(/[^ -~]+/g, '\n\n'))
        .moveDown(2.0);
    pdfDoc
        .fontSize(11)
        .text('8) Interim order, if prayed for : ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(11)
        .text(
            'Pending final decision on the appeal, the appellant seeks issue of the following interim order : ',
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(11)
        .text(
            '[Give here the nature of the interim order prayed for with reasons]: ',
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(11)
        .text(appeal.interim_order.replace(/[^ -~]+/g, '\n\n'))
        .moveDown(2.0);
    pdfDoc
        .fontSize(11)
        .text('9) Matter not pending with any other court, etc. : ', {
            align: 'left',
        })
        .moveDown(1.0);
    pdfDoc
        .fontSize(11)
        .text(
            'The appellant further declares that the matter regarding which this appeal has been made, is not pending before any court of law or any other authority or any other Tribunal(s): ' +
                (appeal.is_matter_pending ? 'Yes' : 'No'),
            {
                align: 'left',
            }
        )
        .moveDown(2.0);
    pdfDoc
        .fontSize(11)
        .text(
            '10) Particulars of the fee in terms of sub-rule A(1) of rule 9 : ',
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(11)
        .text(' i)  Amount : 1000 /- Rs', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(11)
        .text(' ii)  Mode : ', {
            align: 'left',
        })
        .moveDown(2.0);
    pdfDoc
        .fontSize(11)
        .text('11) List of enclosures : ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(11)
        .text(
            ' i)  An attested true copy of the order against which the appeal is filed ',
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(11)
        .text(
            ' ii)  Copies of the documents relied upon by the appellant and referred to in the appeal ',
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(11)
        .text(' iii)  An index of the documents ', {
            align: 'left',
        })
        .moveDown(3.5);
    pdfDoc.fontSize(12).text('VERIFICATION', { align: 'center' }).moveDown(2.0);
    pdfDoc
        .fontSize(11)
        .text(
            'I ___________________________ (name in full block letters) son/daughter of __________________________________ do hereby verify that the contents of paragraphs (1 to 10) are true to my personal knowledge and belief and that I have not suppressed any material fact(s). ',
            {
                align: 'left',
            }
        )
        .moveDown(1.5);
    pdfDoc
        .fontSize(11)
        .text('Place : ', {
            align: 'left',
        })
        .moveDown(1.0);
    pdfDoc
        .fontSize(11)
        .text('Date : ', {
            align: 'left',
        })
        .moveDown(1.0);
    pdfDoc
        .fontSize(11)
        .text('Signature of the Appellant(s) ', {
            align: 'right',
        })
        .moveDown(2.5);
};
