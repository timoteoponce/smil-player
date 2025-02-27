import { doesNotExist, testCoordinates, numberOfElementsExists } from '../../tools/tools';
import { CypressTimeouts, SMILUrls } from '../../enums/enums';

describe("conditionalMediaElement.smil test", () => {
	it("processes smil file correctly", () => {
		cy.visit("/");
		cy.frameLoaded('iframe');
		cy.iframe().find('#SMILUrl').clear().type(SMILUrls.noAdditionalSeq);
		cy.wait(CypressTimeouts.submitTimeout);
		cy.iframe().find('#SMILUrlWrapper').submit();
		cy.get('video[src*="videos/video-test-2_e2ffa51f6a4473b815f39e7fb39239da.mp4"]', { timeout: CypressTimeouts.elementAwaitTimeout }).should('be.visible');
		cy.wait(CypressTimeouts.submitTimeout);
		numberOfElementsExists(cy.get('body'), 'video[src*="videos/video-test-2_e2ffa51f6a4473b815f39e7fb39239da.mp4"]', 4);

	});
});
