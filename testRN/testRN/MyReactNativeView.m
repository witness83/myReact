//
// Created by witness on 15/11/26.
// Copyright (c) 2015 witness. All rights reserved.
//

#import "MyReactNativeView.h"
#import "MyReactNativeViewManager.h"
#import "RCTBridge.h"
#import "RCTEventDispatcher.h"
#import "UIView+React.h"

@interface MyReactNativeView ()

@property (nonatomic, strong) UILabel *textLabel;

@end

@implementation MyReactNativeView
{
	RCTEventDispatcher *_eventDispatcher;
}

//- (instancetype)init{
//	self = [super init];
//	if (self) {
////		self.frame = CGRectMake(0,0,200,200);
//		[self setupView];
//	}
//
//	return self;
//}

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher{
	self = [super init];
	if (self) {
		_eventDispatcher = eventDispatcher;

		[self setupView];
	}

	return self;
}


- (void)setupView {
	self.frame = CGRectMake(0,0,200,200);

	self.textLabel = [[UILabel alloc] initWithFrame:CGRectMake(0,0,200,50)];
	self.textLabel.textColor = [UIColor blackColor];
	self.textLabel.text = @"old";

//	self.backgroundColor = [UIColor yell]
	[self addSubview:self.textLabel];
//	NSTimer *timer = [[NSTimer alloc] initWithFireDate:[NSDate date] interval:1 target:self selector:@selector(startSendEvent) userInfo:nil repeats:YES];
//
//	[timer fire];
}


- (void)setPassValue:(id)json {

	if([self.textLabel.text isEqualToString:@"old"]){
		[self.textLabel setText:json];
		[self setNeedsLayout];
		return;
	}else{
		[self.textLabel setText:json];
		[self setNeedsLayout];
		if(self.delegate ){
			[self.delegate startSendEvent:self];
		}
	}

}

//- (void) startSendEvent{
//	NSLog(@"in startSendEvent....");
//	if(!self.textLabel.text||self.textLabel.text.length==0){
//		NSLog(@"text is empty!!!!! ");
//		return;
//	}
//
//
//	NSDictionary *event = @{
//			@"target" : @2,//self.reactTag,
//			@"events" : @"valuechanged",
//	};
//
////	[self.bridge.eventDispatcher sendInputEventWithName:@"topChange" body:event];
//	[_eventDispatcher sendInputEventWithName:@"topChange" body:@{@"target": self.reactTag}];
//
//
//	NSLog(@"send message ...%@",event);
//}

@end