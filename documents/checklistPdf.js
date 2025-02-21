module.exports = function (pdfDoc, checklist) {
    pdfDoc.font('Times-Roman');
    pdfDoc.fontSize(12).text('FORM A', { align: 'center' }).moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('CHECKLIST FOR SCRUTINY OF APPEAL', { align: 'center' })
        .moveDown(2.0);
    pdfDoc
        .fontSize(12)
        .text(
            'Appeal No.     ' +
                checklist.appeal_num +
                '        Complaint No.    ' +
                checklist.complaint_num,
            {
                align: 'left',
            }
        )
        .moveDown(2.0);
    pdfDoc
        .fontSize(12)
        .text(
            'Parties     ' +
                checklist.appellant +
                '         vs.      ' +
                checklist.respondent,
            {
                align: 'left',
            }
        )
        .moveDown(1.5);
    pdfDoc
        .fontSize(12)
        .text(
            '1    Legal provisions:U/sec.  ' +
                checklist.section_num +
                '   of RERA Act ',
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '2    Whether the appeal is competent :- ' +
                (checklist.is_appeal_competent ? 'Yes' : 'No'),
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '3    Whether the name of the parties and their addresses are properly mentioned in the Appeal Memo :- ' +
                (checklist.is_name_address_correct ? 'Yes' : 'No'),
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '4    Whether certified copy of impugned Order/Judgment is filed with the appeal :- ' +
                (checklist.is_ordercopy_attached ? 'Yes' : 'No'),
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('5    What is the :', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('     a)   Date of the order :-  ' + checklist.date_of_order, {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '     b)   Date of its communication to the party by RERA  :-  ' +
                checklist.date_of_communication,
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '     c)   Date of application for certified copy :-  ' +
                checklist.date_of_application,
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '     d)   Date on which copy was ready :-  ' +
                checklist.date_on_copy_ready,
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '     e)   Date of receipt of certified copy :-  ' +
                checklist.date_of_receipt,
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '     f)   Date of Online filing of appeal :-  ' +
                checklist.date_of_filing,
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '     g)   Date of submission of hard copy of Appeal Memo :-  ' +
                checklist.date_of_submission_hardcopy,
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '     h)   Whether there is any delay in submission of hard copy of Appeal Memo :  ' +
                (checklist.is_delay_on_submission ? 'Yes' : 'No'),
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '     If yes, how many days :-     ' +
                checklist.amount_of_delay_on_submission,
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '6   Is appeal filed within limitation ( 60 days ) :-  ' +
                (checklist.is_appeal_filed_within_limitation ? 'Yes' : 'No'),
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('     (from the date of receipt of order) ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '7   Whether there is any delay in filing of appeal :  ' +
                (checklist.is_delay_in_filing ? 'Yes' : 'No'),
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '     If yes, how many days :-     ' +
                checklist.amount_of_delay_in_filing,
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '8   Whether application for condonation of delay is filed with appeal :  ' +
                (checklist.is_condonation_of_delay_filed ? 'Yes' : 'No'),
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '     If not, raise its objection. ' +
                checklist.objection_for_condonation,
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '9   Whether requisite fees paid :-  ' +
                (checklist.is_fees_paid ? 'Yes' : 'No'),
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '     If yes, copy of the receipt & date of payment :- ' +
                checklist.date_of_payment,
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '10   Whether the required documents are filed with Index & pagination :-  ' +
                (checklist.is_pagination_correct ? 'Yes' : 'No'),
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '     If yes, whether the documents are legible :-  ' +
                checklist.legible_docs,
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '11   i) Whether copy of appeal memo is annexed for giving the same to other side :  ' +
                (checklist.is_appeal_memo_annexed ? 'Yes' : 'No'),
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '      ii) Or served to other side by post/ courier : ' +
                (checklist.is_served_by_post ? 'Yes' : 'No'),
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '12   Whether Vakalatnama/ Authorization is filed and properly stamped :  ' +
                (checklist.is_auth_stamped ? 'Yes' : 'No'),
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '13   Whether e-mail / phone / Mobile No. is on record : ' +
                (checklist.is_email_phone_on_record ? 'Yes' : 'No'),
            {
                align: 'left',
            }
        )
        .moveDown(3.5);
    pdfDoc
        .fontSize(12)
        .text('Signature of the Clerk, Scrutiny Branch', {
            align: 'left',
        })
        .moveDown(3.5);
    pdfDoc
        .fontSize(12)
        .text('Submission :', {
            align: 'left',
            underline: true,
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            "     Matter be placed before Hon'ble Chairperson for seeking Allotment Order. ",
            {
                align: 'left',
            }
        )
        .moveDown(3.5);
    pdfDoc
        .fontSize(12)
        .text('Registrar, Assam REAT ', {
            align: 'right',
        })
        .moveDown(0.5);
};
