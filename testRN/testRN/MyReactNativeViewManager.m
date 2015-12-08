//
// Created by witness on 15/12/7.
// Copyright (c) 2015 witness. All rights reserved.
//

#import "MyReactNativeViewManager.h"
#import "MyReactNativeView.h"
#import "RCTBridge.h"
#import "RCTEventDispatcher.h"
#import "UIView+React.h"

@interface MyReactNativeViewManager()

@end

@implementation MyReactNativeViewManager
{

}


RCT_EXPORT_MODULE()

//RCT_EXPORT_VIEW_PROPERTY(nativeValue,NSString *)

RCT_CUSTOM_VIEW_PROPERTY(nativeValue, NSString *, MyReactNativeView){

	NSLog(@"pass json is %@",json);
	[view setPassValue:json];
}

RCT_EXPORT_METHOD(nativeMethod:(NSString *)methodname){
	NSLog(@"in nativeMethod methodname is %@",methodname);

}

- (UIView *) view{
	MyReactNativeView *localView = [[MyReactNativeView alloc] initWithEventDispatcher:self.bridge.eventDispatcher];
	localView.reactTag = @1;
	return localView;
}



@end