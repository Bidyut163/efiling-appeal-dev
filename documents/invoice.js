module.exports = function (pdfDoc, appeal, receipt) {
    pdfDoc
        .font('Courier')
        .fontSize(24)
        .text('ASSAM REAL ESTATE APPELLATE TRIBUNAL', { align: 'center' })
        .moveDown(1.5)
        .font('Times-Roman')
        .fontSize(16)
        .text('---------- Payment Receipt -----------', { align: 'center' })
        .moveDown(2)
        .fontSize(14)
        .text('Invoivce to', { align: 'left' })
        .fontSize(12)
        .moveDown(1)
        .text('Name:                                  ' + appeal.fullname)
        .moveDown(0.1)
        .text(
            'Email Id:                              ' +
                appeal.appellant_email_id
        )
        .moveDown(0.1)
        .text('Appeal Id:                           ' + appeal.id)
        .moveDown(0.1)
        .text('Transaction Id:                    ' + receipt.BankTransactionNo)
        .moveDown(0.1)
        .text('Status:                                 ' + 'Success')
        .moveDown(0.1)
        .text('Transaction Date:                ' + receipt.ResponseDateTime)
        .moveDown(0.1)
        .text('service:                                ' + 'Appeal Fee')
        .moveDown(0.1)
        .text('Payment Method:                ' + receipt.PaymentMode)
        .moveDown(0.1)
        .text('Amount:                              ' + '1000/-')
        .moveDown(3)
        .text('-------------------------------------', { align: 'center' });
};
